import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/header";
import { MessageProvider } from "@/components/message";

const sans = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "MoonTrade AI",
  description: "MoonTrade AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} antialiased h-screen`}
      >
        <PageHeader />
        <MessageProvider>
          <main className="overflow-scroll" style={{ height: "calc(100% - 60px)" }}>
            {children}
          </main>
        </MessageProvider>
      </body>
    </html>
  );
}
