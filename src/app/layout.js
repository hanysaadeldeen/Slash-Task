import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Slash Tash",
  description: "Generated by Next ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            {/* Logo Section */}
            <div className="text-2xl font-bold">
              <Link href="/">
                <h1 className="hover:text-blue-300">Slash Task</h1>
              </Link>
            </div>
            {/* Navigation Section */}
            <nav>
              <Link href="/form">
                <h1 className="text-lg hover:text-blue-300">Form</h1>
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
