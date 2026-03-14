import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white font-semibold mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              <span>ZipGit</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              The developer infrastructure platform that transforms local ZIP archives into perfectly structured, cloud-ready GitHub repositories.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/upload" className="hover:text-white transition-colors">
                  Upload
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <a href="https://github.com/lazyekansh/zip-to-git" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} ZipGit. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built and developed by{" "}
            <a
              href="https://ek4nsh.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-300 transition-colors"
            >
              Ekansh Tiwari
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
