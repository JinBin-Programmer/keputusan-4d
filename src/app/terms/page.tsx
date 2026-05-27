import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terma Penggunaan — Keputusan 4D Malaysia" };
export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Terma Penggunaan / Terms of Use</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Data keputusan yang dipaparkan adalah untuk tujuan rujukan sahaja. Kami tidak menjamin ketepatan data. Sila semak laman web rasmi pengendali untuk keputusan sah.</p>
        <p>Results data displayed is for reference purposes only. We do not guarantee accuracy. Please check official operator websites for authoritative results. We are not affiliated with any lottery operator.</p>
      </div>
    </div>
  );
}
