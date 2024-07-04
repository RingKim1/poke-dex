"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "포켓몬 도감",
//   description: "오늘의 포켓몬을 뭘까요~?",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
