import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alastreplastering.com"),
  title: {
    default:
      "Alastre Plastering | Framing, Drywall, Finish, Stucco, Shell, Concrete & Rebar",
    template: "%s | Alastre Plastering",
  },
  description:
    "Alastre Plastering provides framing, drywall, finish, stucco, shell construction, sidewalks, concrete, rebar and columns in Miami, Homestead and South Florida.",
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
        url: "/og-image.jpg",
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
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
