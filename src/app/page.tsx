export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <img src="/images/codex_ai_logo.png" alt="Codex AI" className="h-20 mb-6" />
      <h1 className="text-4xl font-bold">Codex — Predição de CID-10</h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-xl">
        Predição automática de CID-10 com explicabilidade e validação médica assistida.
      </p>
      <a
        href="https://wa.me/5562985499620?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20Codex"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700"
      >
        Falar no WhatsApp
      </a>
    </main>
  );
}
