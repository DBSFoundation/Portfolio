import "./globals.css";

export const metadata = {
  title: "Dandy DS | Portfolio",
  description: "Crypto Trader, Full-Stack Developer & Airdrop Hunter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
