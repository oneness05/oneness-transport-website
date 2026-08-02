import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
