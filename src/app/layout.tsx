import type { Metadata } from "next";
import { barlow, publicSans, robotoMono } from "@/assets/fonts";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { Providers } from "@/lib/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Agent-Driven Backends, Deterministically Generated`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@apsoai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${publicSans.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-fg-2 bg-bg-0">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
