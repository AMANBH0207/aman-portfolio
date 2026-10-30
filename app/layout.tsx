import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Bhardwaj | Frontend Developer",
  description: "Portfolio of Aman Bhardwaj — frontend developer building thoughtful, performant web experiences.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
