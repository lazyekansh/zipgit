import "./globals.css";
import { Providers } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "zipgit",
  description: "Drop a ZIP, get a repo. Upload a ZIP and push it directly to GitHub without using git commands.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "zipgit",
    description: "Drop a ZIP, get a repo.",
    url: "https://ziptogit.ek4nsh.in",
    siteName: "zipgit",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
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
