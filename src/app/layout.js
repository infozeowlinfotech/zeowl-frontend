import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import ZeowlLoader from "@/components/loader/ZeowlLoader";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Zeowl Infotech | Engineering Digital Experiences",
  description: "Zeowl Infotech is a premium technology and creative studio. We build scalable digital products, web apps, mobile apps, and engineer automation solutions for ambitious businesses.",
  keywords: [
    "Zeowl Infotech",
    "Zeowl",
    "Zeowl Infotech Surat",
    "IT Company",
    "Software Development Agency",
    "Web Development",
    "App Development",
    "Mobile App Development",
    "UI/UX Design",
    "Custom Software Solutions",
    "Business Automation",
    "AI Solutions",
    "Tech Studio"
  ],
  authors: [{ name: "Zeowl Infotech" }],
  creator: "Zeowl Infotech",
  publisher: "Zeowl Infotech",
  openGraph: {
    title: "Zeowl Infotech | Digital Product Agency",
    description: "We bring together engineering, design, and automation to transform ideas into scalable digital solutions.",
    siteName: "Zeowl Infotech",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-navy relative">
        <ZeowlLoader />
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
