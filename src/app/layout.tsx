import "./globals.css";
import { Providers } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZipGit",
  description: "Drop a ZIP, get a repo. Upload a ZIP and push it directly to GitHub without using git commands.",

  icons: {
    icon: "/logo.svg",
  },

  openGraph: {
    title: "ZipGit",
    description: "Drop a ZIP, get a repo.",
    url: "https://ziptogit.ek4nsh.in",
    siteName: "ZipGit",
    images: [
      {
        url: "https://ziptogit.ek4nsh.in/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ZipGit",
    description: "Drop a ZIP, get a repo.",
    images: ["https://ziptogit.ek4nsh.in/preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
