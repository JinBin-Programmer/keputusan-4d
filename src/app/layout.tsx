import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://4d.themalaysianinfo.online"),
  title: { default: "Keputusan 4D Malaysia — Magnum TOTO Da Ma Cai", template: "%s — Keputusan 4D Malaysia" },
  description: "Semak keputusan 4D Malaysia terkini — Magnum 4D, Sports TOTO, Da Ma Cai. Nombor pemenang, hadiah pertama, kedua, ketiga, khas dan saguhati. Check latest Malaysia 4D lottery results.",
  keywords: ["keputusan 4d malaysia", "4d result today", "magnum 4d", "sports toto", "da ma cai", "4d terkini", "nombor 4d hari ini"],
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎰</text></svg>" },
  openGraph: { type: "website", locale: "ms_MY", siteName: "Keputusan 4D Malaysia" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
                <span className="text-2xl">🎰</span>
                <div>
                  <div className="leading-none">Keputusan 4D</div>
                  <div className="text-[10px] text-white/40 font-normal leading-none">Malaysia 4D Results</div>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-white/60">
                  <Link href="/" className="hover:text-white transition-colors">Keputusan</Link>
                  <Link href="/about" className="hover:text-white transition-colors">Tentang</Link>
                </div>
                <LanguageToggle />
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/30 space-y-1">
            <p>Untuk keputusan rasmi, lawati laman web rasmi pengendali. · For official results, visit operator websites.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link href="/about" className="hover:text-white">Tentang / About</Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-white">Privasi / Privacy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white">Terma / Terms</Link>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} Keputusan 4D Malaysia · Untuk rujukan sahaja / For reference only</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
