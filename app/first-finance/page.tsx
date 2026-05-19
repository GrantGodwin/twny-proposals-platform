import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Finance Solutions Proposal | TWNY",
  description:
    "A TWNY modernisation proposal and immersive future-state website experience for First Finance Solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FirstFinancePage() {
  return (
    <main className="bg-white">
      <iframe
        src="/clients/first-finance/index.html"
        title="First Finance Solutions Proposal"
        className="block h-[100svh] w-full border-0"
      />
    </main>
  );
}
