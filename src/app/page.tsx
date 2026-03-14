"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-zinc-800">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-8"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          Developer Infrastructure Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-tight"
        >
          Ship repositories <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            in seconds.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10"
        >
          The developer infrastructure platform that transforms local ZIP archives into perfectly structured, cloud-ready GitHub repositories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/login"
            className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-200 transition-transform active:scale-95"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <a
            href="https://github.com/lazyekansh/zip-to-git"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Source
          </a>
        </motion.div>
      </section>

      <section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-white mb-2">How it works</h2>
            <p className="text-zinc-400">The architecture behind seamless extraction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 12h4" />
                  <path d="M10 16h4" />
                </svg>
              }
              title="In-Memory Processing"
              desc="Upload ZIP files securely. Everything is buffered and extracted in-memory without touching disk storage."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" x2="20" y1="19" y2="19" />
                </svg>
              }
              title="Automated Parsing"
              desc="Smart extraction strips unnecessary root folders and ignores system junk like .DS_Store automatically."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" x2="6" y1="3" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
              }
              title="Atomic Git Commits"
              desc="Leverages GitHub's Git Database API to push hundreds of files as binary blobs in a single, clean commit."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-medium text-white mb-2">Simple three-step workflow</h2>
            <p className="text-zinc-400">From ZIP to repository in under a minute.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              step="01"
              title="Authenticate"
              desc="Connect your GitHub account securely via OAuth. We request only the permissions necessary for repository creation."
            />
            <StepCard
              step="02"
              title="Configure"
              desc="Set a repository name and optional description. If the repository does not exist, it will be created automatically."
            />
            <StepCard
              step="03"
              title="Upload"
              desc="Drop your ZIP archive and hit push. Files are extracted, parsed, and committed atomically to your repository."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-white mb-2">Built for developers</h2>
            <p className="text-zinc-400">Robust features under the hood.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">Secure by Default</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                OAuth tokens are never stored on disk. All processing happens in-memory and tokens are scoped to the minimum required permissions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">Auto-Initialization</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                If your target repository does not exist, the platform will automatically create and initialize it with a README before pushing your files.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="m9 15 3-3 3 3" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">Smart Root Detection</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Automatically strips extraneous root directories created during compression so your repository structure stays clean.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">Parallel Blob Upload</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                All files are uploaded as base64-encoded blobs in parallel, then committed in a single atomic operation for maximum speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Ready to ship?
          </h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Connect your GitHub account and start deploying archives in seconds.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-transform active:scale-95"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white/10 mb-4">{step}</div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}
