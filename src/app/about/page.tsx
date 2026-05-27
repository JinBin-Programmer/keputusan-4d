import type { Metadata } from "next";
export const metadata: Metadata = { title: "Tentang Keputusan 4D Malaysia" };
export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Tentang / About</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p><strong className="text-white">Keputusan 4D Malaysia</strong> memaparkan keputusan lotri 4D Malaysia termasuk Magnum 4D, Sports TOTO, dan Da Ma Cai untuk rujukan pengguna.</p>
        <p><strong className="text-white">Malaysia 4D Results</strong> displays Malaysian 4D lottery results including Magnum 4D, Sports TOTO, and Da Ma Cai for user reference.</p>
        <p className="text-yellow-400/70 text-xs">Untuk keputusan rasmi, sila lawati laman web rasmi pengendali. / For official results, please visit operator official websites.</p>
      </div>
    </div>
  );
}
