import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-6 pt-28 pb-20 w-full">
        <h1 className="text-3xl font-medium text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-sm text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">1. Overview</h2>
            <p>
              This Privacy Policy describes how ZipGit ("the Platform") collects, uses, and protects information when you use our service. We are committed to protecting your privacy and handling your data responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">2. Information We Collect</h2>
            <p className="mb-2">When you use the Platform, we may collect the following information:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-500">
              <li>GitHub profile information (username, email) provided through OAuth authentication</li>
              <li>Repository names and descriptions you provide during upload</li>
              <li>ZIP archive files you upload for processing</li>
              <li>Usage data such as timestamps and request metadata</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-2">We use the collected information solely for:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-500">
              <li>Authenticating your identity via GitHub OAuth</li>
              <li>Creating and managing repositories on your behalf</li>
              <li>Processing and pushing ZIP archive contents to GitHub</li>
              <li>Improving the Platform and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">4. Data Storage and Processing</h2>
            <p>
              ZipGit processes all uploaded files entirely in-memory. ZIP archives are not written to persistent disk storage at any point. Once the upload and push operation completes (whether successfully or with an error), the file data is discarded from memory. No copies of your uploaded files are retained.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">5. Authentication Tokens</h2>
            <p>
              GitHub OAuth access tokens are used exclusively for the duration of your session and are not stored in any database. Tokens are transmitted securely and are used only to perform the repository operations you initiate. You may revoke access at any time through your GitHub account settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">6. Third-Party Services</h2>
            <p className="mb-2">The Platform integrates with the following third-party services:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-500">
              <li>GitHub (authentication and repository management)</li>
              <li>Vercel (hosting and deployment)</li>
            </ul>
            <p className="mt-2">
              Each of these services has its own privacy policy governing data handling. We recommend reviewing their respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">7. Cookies</h2>
            <p>
              The Platform uses essential cookies for session management and authentication. These cookies are strictly necessary for the Platform to function and cannot be disabled. No tracking or advertising cookies are used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">8. Data Security</h2>
            <p>
              We implement appropriate technical measures to protect your information during transmission and processing. All communication with the Platform occurs over HTTPS. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">9. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-500">
              <li>Revoke GitHub OAuth access at any time</li>
              <li>Request information about data we process</li>
              <li>Request deletion of any retained data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date. Continued use of the Platform constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">11. Contact</h2>
            <p>
              For privacy-related inquiries, please contact us through the{" "}
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
