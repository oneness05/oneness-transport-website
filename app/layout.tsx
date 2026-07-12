import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onenesstransport.com"),
  title: {
    default: "Oneness Transport | Texas Dry Van Freight Carrier",
    template: "%s | Oneness Transport",
  },
  description:
    "Oneness Transport LLC is an Austin, Texas-based dry van carrier providing dependable regional and interstate freight transportation.",
  keywords: [
    "Texas dry van carrier",
    "Austin trucking company",
    "dry van freight",
    "Texas freight transportation",
    "interstate trucking carrier",
    "Oneness Transport",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Oneness Transport",
    title: "Oneness Transport | Texas Dry Van Freight Carrier",
    description:
      "Dependable dry van transportation across Texas and interstate lanes, driven by integrity and delivered with excellence.",
  },
  twitter: {
    card: "summary",
    title: "Oneness Transport | Texas Dry Van Freight Carrier",
    description:
      "Dependable dry van transportation across Texas and interstate lanes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
