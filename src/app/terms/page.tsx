import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-6 pt-28 pb-20 w-full">
        <h1 className="text-3xl font-medium text-white mb-2">Terms and Conditions</h1>
        <p className="text-sm text-zinc-500 mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-sm text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ZipGit ("the Platform"), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">2. Description of Service</h2>
            <p>
              ZipGit provides a web-based service that allows authenticated users to upload ZIP archive files and have their contents pushed to GitHub repositories. The Platform utilizes GitHub OAuth for authentication and the GitHub API for repository operations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">3. User Responsibilities</h2>
            <p className="mb-2">By using the Platform, you agree to:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-500">
              <li>Provide accurate authentication credentials via GitHub OAuth</li>
              <li>Only upload content that you have the legal right to distribute</li>
              <li>Not use the Platform for any unlawful or prohibited purpose</li>
              <li>Not attempt to interfere with or disrupt the Platform's infrastructure</li>
              <li>Not upload malicious files, viruses, or harmful content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">4. GitHub Integration</h2>
            <p>
              The Platform requires GitHub OAuth authorization to function. By authenticating, you grant the Platform permission to create repositories, read user information, and push content to repositories on your behalf. You can revoke this access at any time through your GitHub account settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">5. Content Ownership</h2>
            <p>
              You retain all ownership rights to the content you upload through the Platform. ZipGit does not claim any intellectual property rights over your uploaded content. You are solely responsible for ensuring that your content does not infringe on the rights of third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">6. Data Processing</h2>
            <p>
              All file processing occurs in-memory and is not persisted on our servers. ZIP archives are extracted, processed, and pushed to GitHub in a single operation. No copies of your files are stored after the operation completes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">7. Limitation of Liability</h2>
            <p>
              The Platform is provided "as is" without warranties of any kind. ZipGit shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Platform, including but not limited to data loss, repository corruption, or unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">8. Service Availability</h2>
            <p>
              ZipGit does not guarantee uninterrupted or error-free service. The Platform depends on third-party services including GitHub's API, which may experience downtime or rate limiting beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">9. Modifications to Terms</h2>
            <p>
              ZipGit reserves the right to modify these Terms and Conditions at any time. Continued use of the Platform after changes constitutes acceptance of the updated terms. Users are encouraged to review these terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">10. Termination</h2>
            <p>
              ZipGit reserves the right to suspend or terminate access to the Platform at any time, for any reason, without prior notice. Upon termination, your right to use the Platform will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">11. Contact</h2>
            <p>
              For any questions regarding these Terms and Conditions, please reach out through the{" "}
              <a
                href="https://github.com/lazyekansh/zipgit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-300 underline transition-colors"
              >
                GitHub repository
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
