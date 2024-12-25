import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DomSell",
  description: "Buy, Sell and Manage Domains",
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
  themeColor: '#000000'
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
