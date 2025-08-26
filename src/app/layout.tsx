import "./globals.css"; // <-- ESSENCIAL

export const metadata = {
  title: "Codex — Predição de CID-10",
  description: "Predição automática de CID-10 com explicabilidade e validação médica assistida."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
