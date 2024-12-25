import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import type { Viewport } from 'next'

 
export const viewport: Viewport = {
  themeColor: "#111111"
}

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DomSell",
  description: "Buy, Sell and Manage Domains",
  openGraph: {
    title: 'DomSell - Domain Trading Platform',
    description: "Don't let domains sit idle. Resell with ease, buy from top registrars, and manage your portfolio all in one place. Make your domains work for you!",
    url: 'https://domsell.com',
    siteName: 'DomSell',
    images: [
      {
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext x="35%25" y="50%25" dominant-baseline="central" text-anchor="middle" font-size="80" font-weight="bold" fill="%2300ffff"%3ED%3C/text%3E%3Ctext x="65%25" y="50%25" dominant-baseline="central" text-anchor="middle" font-size="80" font-weight="bold" fill="white"%3ES%3C/text%3E%3C/svg%3E',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DomSell - Domain Trading Platform',
    description: "Don't let domains sit idle. Resell with ease, buy from top registrars, and manage your portfolio all in one place. Make your domains work for you!",
    images: ['data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext x="35%25" y="50%25" dominant-baseline="central" text-anchor="middle" font-size="80" font-weight="bold" fill="%2300ffff"%3ED%3C/text%3E%3Ctext x="65%25" y="50%25" dominant-baseline="central" text-anchor="middle" font-size="80" font-weight="bold" fill="white"%3ES%3C/text%3E%3C/svg%3E'],
  },
  icons: {
    icon: [
      { 
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='35%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80' font-weight='bold' fill='%2300ffff'%3ED%3C/text%3E%3Ctext x='65%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80' font-weight='bold' fill='white'%3ES%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml"
      }
    ],
    apple: [
      { url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='35%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80' font-weight='bold' fill='%2300ffff'%3ED%3C/text%3E%3Ctext x='65%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80' font-weight='bold' fill='white'%3ES%3C/text%3E%3C/svg%3E", type: "image/svg+xml" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
