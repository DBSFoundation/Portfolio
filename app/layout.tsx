import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Dandy DS | Portfolio",
  description: "Crypto Trader, Full-Stack Developer, Airdrop Hunter since 2013",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
