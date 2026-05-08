import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description: "CV d'Edouard Adam — développeur backend Laravel.",
};

const CV_PATH = "/Edouard_Adam_CV.pdf";

export default function CVPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
            Curriculum Vitae
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl font-black leading-tight"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Mon CV.
          </h1>
        </div>

        <Link href={CV_PATH} download="Edouard_Adam_CV.pdf">
          <Button size="lg">
            <Download size={16} />
            Télécharger le PDF
          </Button>
        </Link>
      </div>

      {/* PDF viewer */}
      <div className="border-2 border-ink shadow-hard-lg w-full" style={{ height: "85vh" }}>
        <iframe
          src={`${CV_PATH}#toolbar=1&navpanes=0`}
          className="w-full h-full"
          title="CV Edouard Adam"
        />
      </div>

      {/* Fallback message for browsers that block iframe PDF */}
      <p className="font-mono text-xs text-muted mt-4 text-center">
        Si le PDF ne s&apos;affiche pas,{" "}
        <Link
          href={CV_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline underline-offset-4"
        >
          ouvre-le directement ici
        </Link>
        .
      </p>
    </section>
  );
}
