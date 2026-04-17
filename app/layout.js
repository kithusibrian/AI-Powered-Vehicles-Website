import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cars and Vehicles",
  description: "Find your dream vehicle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClerkProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by MrBeast</p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
