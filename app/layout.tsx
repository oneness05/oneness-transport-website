import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onenesstransport.com"),
  title: {
    default: "Austin Dry Van Trucking Company | Oneness Transport",
    template: "%s | Oneness Transport",
  },
  description:
    "Austin, Texas dry van carrier for full truckload freight. $1M liability, $100K cargo coverage and responsive dispatch. Call 512-363-3649.",
  applicationName: "Oneness Transport",
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  creator: "ONENESS TRANSPORT LLC",
  publisher: "ONENESS TRANSPORT LLC",
  category: "Transportation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Oneness Transport",
    title: "Austin Dry Van Trucking Company | Oneness Transport",
    description:
      "Dependable 53-foot dry van full truckload transportation based in Austin, Texas, with responsive dispatch and verified carrier credentials.",
    images: [
      {
        url: "/images/texas-dry-van-carrier.webp",
        width: 1400,
        height: 788,
        alt: "Oneness Transport dry van truck serving Texas freight lanes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Dry Van Trucking Company | Oneness Transport",
    description:
      "Dependable 53-foot dry van full truckload transportation based in Austin, Texas.",
    images: ["/images/texas-dry-van-carrier.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y042SNRWJD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y042SNRWJD');
          `}
        </Script>
      </body>
    </html>
  );
}
