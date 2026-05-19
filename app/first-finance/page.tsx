import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const metadata: Metadata = {
  title: "First Finance Modernisation Review | twny",
  description:
    "A practical twny modernisation review and future-state website demo for First Finance Solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

function extractHtmlPart(source: string, pattern: RegExp) {
  return source.match(pattern)?.[1]?.trim() ?? "";
}

export default function FirstFinancePage() {
  const source = readFileSync(
    join(process.cwd(), "public/clients/first-finance/index.html"),
    "utf8",
  );

  const styles = extractHtmlPart(source, /<style>([\s\S]*?)<\/style>/);
  const body = extractHtmlPart(source, /<body[^>]*>([\s\S]*?)<\/body>/);
  const script = extractHtmlPart(body, /<script>([\s\S]*?)<\/script>/);
  const markup = body.replace(/<script>[\s\S]*?<\/script>/, "").trim();
  const fontImport =
    '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..600&display=swap");\n';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontImport + styles }} />
      <script
        dangerouslySetInnerHTML={{
          __html: "document.body.classList.add('mode-proposal');",
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
