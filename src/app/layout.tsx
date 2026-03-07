import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Next.js website with Home About Contact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">

            <Link className="navbar-brand" href="/">
              MySite
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <Link className="nav-link" href="/home">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>

              </ul>
            </div>

          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="container mt-4">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-dark text-white text-center p-3 mt-5">
          © 2026 MySite | Built with Next.js
        </footer>

      </body>
    </html>
  );
}