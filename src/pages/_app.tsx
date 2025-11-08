import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import MainLayout from "@/layout/main-layout";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import "@/styles/globals.css"; // includes self-hosted Montserrat

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {/* Preload Montserrat TTF font for faster first paint */}
      <Script
        id="preload-font"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'font';
            link.href = '/fonts/Montserrat-VariableFont_wght.ttf';
            link.type = 'font/ttf';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          `,
        }}
      />

      {/* Preload main JS chunk for hydration */}
      <Script src="/_next/static/chunks/main.js" strategy="beforeInteractive" />

      <ThemeProvider attribute="class" defaultTheme="light">
        <MainLayout>
          <AnimatePresence mode="wait" initial={false}>
            <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>

      <Analytics />
    </>
  );
}
