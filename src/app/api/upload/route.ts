import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { Octokit } from "@octokit/rest";
import AdmZip from "adm-zip";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const token = (session as any)?.accessToken;
    
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const repoName = formData.get("repoName") as string;
    const description = formData.get("description") as string || "";

    if (!file || !repoName) {
      return NextResponse.json({ error: "Missing file or repo name" }, { status: 400 });
    }

    const octokit = new Octokit({ auth: token });
    const { data: user } = await octokit.rest.users.getAuthenticated();
    const owner = user.login;

    let branch = "main";

    try {
      const { data: repo } = await octokit.rest.repos.get({ owner, repo: repoName });
      branch = repo.default_branch || "main";
    } catch (error: any) {
      if (error.status === 404) {
        const { data: newRepo } = await octokit.rest.repos.createForAuthenticatedUser({
          name: repoName,
          description: description,
          auto_init: true,
          private: false,
        });
        branch = newRepo.default_branch || "main";
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } else {
        throw error;
      }
    }

    try {
      await octokit.rest.git.getRef({
        owner,
        repo: repoName,
        ref: `heads/${branch}`,
      });
    } catch (error: any) {
      if (error.status === 409 || error.status === 404) {
        await octokit.rest.repos.createOrUpdateFileContents({
          owner,
          repo: repoName,
          path: "README.md",
          message: "Initial commit",
          content: Buffer.from(`# ${repoName}\n\n${description}`).toString("base64"),
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const zip = new AdmZip(buffer);
    const zipEntries = zip.getEntries();

    const validEntries = zipEntries.filter(entry => 
      !entry.isDirectory && 
      !entry.entryName.includes("__MACOSX") && 
      !entry.entryName.includes(".DS_Store")
    );

    let commonRoot = "";
    if (validEntries.length > 0) {
      const firstPathParts = validEntries[0].entryName.split("/");
      if (firstPathParts.length > 1) {
        const potentialRoot = firstPathParts[0] + "/";
        const allHaveSameRoot = validEntries.every(entry => entry.entryName.startsWith(potentialRoot));
        if (allHaveSameRoot) {
          commonRoot = potentialRoot;
        }
      }
    }

    const treeItems = await Promise.all(
      validEntries.map(async (entry) => {
        const fileBuffer = entry.getData();
        const { data: blobData } = await octokit.rest.git.createBlob({
          owner,
          repo: repoName,
          content: fileBuffer.toString("base64"),
          encoding: "base64",
        });

        const finalPath = entry.entryName.substring(commonRoot.length);

        return {
          path: finalPath,
          mode: "100644" as const,
          type: "blob" as const,
          sha: blobData.sha,
        };
      })
    );

    const { data: refData } = await octokit.rest.git.getRef({
      owner,
      repo: repoName,
      ref: `heads/${branch}`,
    });
    const latestCommitSha = refData.object.sha;

    const { data: commitData } = await octokit.rest.git.getCommit({
      owner,
      repo: repoName,
      commit_sha: latestCommitSha,
    });
    const baseTreeSha = commitData.tree.sha;

    const { data: newTree } = await octokit.rest.git.createTree({
      owner,
      repo: repoName,
      base_tree: baseTreeSha,
      tree: treeItems,
    });

    const { data: newCommit } = await octokit.rest.git.createCommit({
      owner,
      repo: repoName,
      message: `Automated upload of ${file.name}`,
      tree: newTree.sha,
      parents: [latestCommitSha],
    });

    await octokit.rest.git.updateRef({
      owner,
      repo: repoName,
      ref: `heads/${branch}`,
      sha: newCommit.sha,
    });

    return NextResponse.json({ success: true, owner, repoName });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
