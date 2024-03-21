import "@/styles/globals.css";
import "@/styles/sandpack.css";
import { Metadata } from "next";
import { clsx } from "@nextui-org/shared-utils";

import { Providers } from "./providers";

import { Cmdk } from "@/components/cmdk";
import manifest from "@/config/routes.json";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProBanner } from "@/components/pro-banner";
import { ScriptProviders } from "@/components/scripts/script-providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "KAPELLA",
    "Next.js",
    "Tailwind CSS",
    "NextUI",
    "React Aria",
    "Server Components",
    "React Components",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "UI Design System",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "jrgarciadev",
      url: "https://jrgarciadev.com",
    },
  ],
  creator: "jrgarciadev",
  alternates: {
    canonical: "https://nextui.org",
    types: {
      "application/rss+xml": [{ url: "https://nextui.org/feed.xml", title: "NextUI RSS Feed" }],
    },
  },
  viewport:
    "viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="zh">
      <head />
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col" id="app-container">
            <ProBanner />
            <Navbar mobileRoutes={manifest.mobileRoutes} routes={manifest.routes} />
            {children}
            <Footer />
          </div>
          <Cmdk />
        </Providers>
        <ScriptProviders />
      </body>
    </html>
  );
}
