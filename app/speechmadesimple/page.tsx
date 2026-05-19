import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech Made Simple Proposal | TWNY",
  description:
    "Brand direction and live website prototype for Speech Made Simple — a paediatric speech and literacy practice for Melbourne's inner-west.",
};

export default function SpeechMadeSimplePage() {
  return (
    <main className="bg-white">
      <iframe
        src="/clients/speechmadesimple/index.html"
        title="Speech Made Simple Proposal"
        className="block h-[100svh] w-full border-0"
      />
    </main>
  );
}
