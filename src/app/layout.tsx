import { UIProviders } from "@/components/provider/UIProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo CRUD with Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="bg-gray-50 min-h-screen pt-10"
      >
        <UIProviders>{children}</UIProviders>
      </body>
    </html>
  );
}
