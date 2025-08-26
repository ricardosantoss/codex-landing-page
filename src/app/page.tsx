export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="w-full max-w-4xl mx-auto px-6 py-16 text-center">
        <img
          src="/images/codex_ai_logo.png"
          alt="Codex AI"
          className="h-24 w-auto mx-auto mb-8"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Codex — Predição de CID-10
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Predição automática de CID-10 com explicabilidade e validação médica assistida.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/5562985499620?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20Codex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition-colors"
          >
            Falar no WhatsApp
          </a>

          <a
            href="#sobre"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:bg-white transition-colors"
          >
            Ver mais
          </a>
        </div>
      </section>
    </main>
  );
}

