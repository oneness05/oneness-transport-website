import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://onenesstransport.com"),
  title: {
    default: "ONENESS TRANSPORT LLC | Professional Dry Van Carrier",
    template: "%s | ONENESS TRANSPORT LLC",
  },
  description:
    "Texas-based dry van carrier providing professional full truckload transportation with reliable communication and modern equipment.",
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
