import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DomSell",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <Head>
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
