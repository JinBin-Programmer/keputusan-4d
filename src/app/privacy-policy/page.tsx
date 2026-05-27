import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dasar Privasi — Keputusan 4D Malaysia" };
export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Dasar Privasi / Privacy Policy</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Laman web ini tidak menyimpan sebarang data peribadi. Nombor yang anda masukkan untuk semak tidak dihantar ke mana-mana pelayan.</p>
        <p>This website does not store any personal data. Numbers you enter for checking are not sent to any server.</p>
        <p className="text-white/40 text-xs">Dikemas kini: Mei 2026 / Updated: May 2026</p>
      </div>
    </div>
  );
}
