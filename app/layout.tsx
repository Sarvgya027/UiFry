import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";  // Import the Head component
import "./globals.css";
// import '../styles/tailwind.css' 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UiFry",
  description: "a UI landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <Head>  
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
