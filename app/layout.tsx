
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Austin Beal | Software Engineer",
  description: "Personal website and portfolio of Austin Beal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
