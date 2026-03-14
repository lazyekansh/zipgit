"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full border-b border-white/5 bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-semibold tracking-tight">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <span>ZipGit</span>
        </Link>

        <div className="flex items-center gap-6">
          {session ? (
            <>
              <Link href="/upload" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Upload
              </Link>
              <span className="text-sm text-zinc-400">{session.user?.name}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-sm font-medium text-white hover:text-zinc-300 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
