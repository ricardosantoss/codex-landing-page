export const metadata = {
  title: "Codex — Predição de CID-10",
  description:
    "Predição automática de CID-10 com explicabilidade e validação médica assistida."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
