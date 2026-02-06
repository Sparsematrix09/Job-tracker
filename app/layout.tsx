import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobTrackr - Job Application Tracker & Career Resources",
  description: "Track your job applications, access career guides, interview preparation tips, and company profiles for software engineering roles. Get insights on Amazon, FAANG interviews, and tech career growth.",
  keywords: [
    "job application tracker",
    "career resources",
    "software engineer jobs",
    "technical interview preparation",
    "Amazon interview questions",
    "FAANG careers",
    "coding interviews",
    "system design",
    "tech jobs 2024",
    "remote software engineer"
  ],
  authors: [{ name: "JobTrackr Team" }],
  creator: "JobTrackr",
  publisher: "JobTrackr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jobtrackr.example.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jobtrackr.example.com",
    title: "JobTrackr - Job Application Tracker & Career Resources",
    description: "Track your job applications and access career guides for tech roles",
    siteName: "JobTrackr",
    images: [
      {
        url: "/og-image.png", // You should create this image
        width: 1200,
        height: 630,
        alt: "JobTrackr - Job Application Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JobTrackr - Job Application Tracker & Career Resources",
    description: "Track your job applications and access career guides for tech roles",
    images: ["/twitter-image.png"], // You should create this image
    creator: "@jobtrackr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest", // Create this file if needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "JobTrackr",
              "url": "https://jobtrackr.example.com",
              "description": "Job application tracker and career resource platform",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jobtrackr.example.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JobTrackr",
              "url": "https://jobtrackr.example.com",
              "logo": "https://jobtrackr.example.com/logo.png",
              "sameAs": [
                "https://twitter.com/jobtrackr",
                "https://linkedin.com/company/jobtrackr"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-gray-50 to-blue-50`}
      >
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {children}
        </main>
        
        {/* Footer for SEO */}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">JobTrackr</h3>
                <p className="text-gray-400">Your job application tracking and career growth platform.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Career Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/careers/staff-engineer" className="hover:text-white transition">Staff Engineer Guide</a></li>
                  <li><a href="/careers/sde-intern" className="hover:text-white transition">SDE Intern Guide</a></li>
                  <li><a href="/guides/technical-interview-prep" className="hover:text-white transition">Interview Prep</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company Profiles</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/companies/amazon" className="hover:text-white transition">Amazon Careers</a></li>
                  <li><a href="/companies/raftlabs" className="hover:text-white transition">Raftlabs Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} JobTrackr. All rights reserved.</p>
              <p className="mt-2 text-sm">
                <a href="/sitemap.xml" className="hover:text-gray-300 mr-4">Sitemap</a>
                <a href="/privacy" className="hover:text-gray-300 mr-4">Privacy Policy</a>
                <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}