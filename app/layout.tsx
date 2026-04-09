import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alastreplastering.com"),
  title: {
    default:
      "Alastre Plastering | Framing, Drywall, Finish, Stucco, Shell, Concrete & Rebar",
    template: "%s | Alastre Plastering",
  },
  description:
  "Alastre Plastering is a high-end framing, drywall, stucco and shell contractor in Miami and South Florida. We specialize in new construction, custom homes and structural concrete work from foundation to finish.",
  keywords: [
    "framing contractor miami",
    "drywall contractor miami",
    "drywall finish contractor homestead",
    "stucco contractor south florida",
    "shell construction miami",
    "concrete contractor homestead",
    "rebar contractor south florida",
    "sidewalk contractor miami",
    "columns concrete contractor",
    "residential contractor miami",
    "commercial contractor south florida",
    "drywall contractor for new construction miami",
    "stucco contractor for custom homes south florida",
    "shell contractor for residential construction florida",
    "luxury home construction miami",
    "custom home shell contractor florida",
    "high end construction contractor miami",
    "precision concrete contractor miami",
    "gemstonegc.com",
    "gemstonebuilders",

  ],
  alternates: {
    canonical: "https://www.alastreplastering.com",
  },
  openGraph: {
    title: "Alastre Plastering",
    description:
      "Framing, drywall, finish, stucco, shell construction, concrete, rebar, columns and sidewalks in South Florida.",
    url: "https://www.alastreplastering.com",
    siteName: "Alastre Plastering",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/alastre-final.jpg",
        width: 1200,
        height: 630,
        alt: "Alastre Plastering construction services",
      },
    ],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}