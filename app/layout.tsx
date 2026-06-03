import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teacher Pilot — Mark smarter. Plan faster. Report with confidence.",
  description:
    "AI-powered tools for Australian teachers. Mark an entire class set in minutes, generate Victorian Curriculum-aligned lesson plans, and write professional report comments with ease.",
  keywords: "teacher, AI, marking, lesson plans, report writing, Australian, Victorian Curriculum",
  openGraph: {
    title: "Teacher Pilot — AI tools for Australian teachers",
    description: "Mark smarter. Plan faster. Report with confidence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
