"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useRef, DragEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [repoName, setRepoName] = useState("");
  const [description, setDescription] = useState("");
  const [uploadStatus, setUploadStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [repoDetails, setRepoDetails] = useState({ owner: "", repo: "" });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !repoName) {
      setErrorMsg("Repository name and file are required.");
      setUploadStatus("error");
      return;
    }

    setUploadStatus("processing");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("repoName", repoName);
    formData.append("description", description);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (res.ok) {
        setRepoDetails({ owner: data.owner, repo: data.repoName });
        setUploadStatus("success");
      } else {
        setErrorMsg(data.error);
        setUploadStatus("error");
      }
    } catch {
      setErrorMsg("Network connection failed.");
      setUploadStatus("error");
    }
  };

  const resetState = () => {
    setUploadStatus("idle");
    setFile(null);
    setRepoName("");
    setDescription("");
  };

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <svg className="animate-spin w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-white mb-2">New Repository Push</h1>
          <p className="text-sm text-zinc-400">Configure your target repository and upload your archive.</p>
        </div>

        <div className="bg-zinc-950 border border-white/5 rounded-2xl p-8 mb-8">
          <div className="grid gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Target Repository</label>
              <input
                type="text"
                placeholder="e.g., nextjs-portfolio"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Description (Optional)</label>
              <input
                type="text"
                placeholder="Brief description of the push"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${
              isDragging
                ? "border-white/40 bg-white/5"
                : "border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
            }`}
          >
            <input
              type="file"
              accept=".zip"
              ref={fileInputRef}
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
            />
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/5 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
              </div>
            </div>
            <p className="text-white font-medium mb-1">
              {file ? file.name : "Click or drag ZIP file here"}
            </p>
            <p className="text-xs text-zinc-500">
              {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : "Maximum archive size: 50MB"}
            </p>
          </div>

          {uploadStatus === "error" && (
            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
              {errorMsg}
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleUpload}
              disabled={uploadStatus === "processing"}
              className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {uploadStatus === "processing" ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
                  </svg>
                  Compiling...
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="8" x="2" y="14" rx="2" />
                    <rect width="20" height="8" x="2" y="2" rx="2" />
                  </svg>
                  Initialize Push
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-white/5 bg-zinc-950 flex gap-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 shrink-0">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-white mb-1">Auto-Initialization</h4>
              <p className="text-xs text-zinc-500">
                If your target repository does not exist, the platform will automatically create and initialize it for you.
              </p>
            </div>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-zinc-950 flex gap-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 shrink-0">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-white mb-1">Root Structure</h4>
              <p className="text-xs text-zinc-500">
                The compiler automatically strips extraneous root directories created during compression.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <AnimatePresence>
        {uploadStatus === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-zinc-950 border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(34 197 94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Push Successful</h3>
              <p className="text-sm text-zinc-400 mb-8">
                Your archive was successfully compiled and pushed to <strong>{repoDetails.repo}</strong>.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://github.com/${repoDetails.owner}/${repoDetails.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Repository
                </a>
                <button
                  onClick={resetState}
                  className="w-full text-zinc-400 py-3 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-colors"
                >
                  Close panel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
