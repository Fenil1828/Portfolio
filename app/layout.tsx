import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fenil N Jasani — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack, Next.js, TypeScript, and building scalable web applications.",
  keywords: ["Fenil Jasani", "Full Stack Developer", "MERN Stack", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Fenil N Jasani" }],
  openGraph: {
    title: "Fenil N Jasani — Full Stack Developer",
    description: "Building scalable web experiences with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} font-dm antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
