import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Channel Cleaner – Archive Dead Channels Automatically",
  description: "Scan your Slack workspace, identify inactive channels, and archive them with one click. Keep your workspace clean and organized."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f2ad7087-a736-42a3-ab28-c25d2b820332"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
