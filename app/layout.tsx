import type { Metadata } from "next";
import Script from "next/script";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieProvider } from "@/components/CookieProvider";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL("http://localhost:3000"),
  title: "Dylan Butelho | Full-Stack Developer & M.S. Computer Science",
  description:
    "Full-Stack Developer specializing in modern web applications, APIs, ML/AI & scalable systems. Syracuse University.",
};

const themeInitScript = `
  (function() {
    var m = document.cookie.match(/(^| )portfolio-theme=([^;]+)/);
    var theme = (m && (m[2] === 'dark' || m[2] === 'light')) ? m[2] : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`min-h-screen font-sans overflow-x-hidden ${inter.variable} ${ibmPlexMono.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <CookieProvider>
            <ScrollAnimations />
            <CustomCursor />
            <Navbar />
            <div className="flex min-h-screen flex-col">
              <main className="flex-1 pt-[var(--navbar-height)]">{children}</main>
              <Footer />
            </div>
          </CookieProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
