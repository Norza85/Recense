import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recense — Vos logiciels payés, jamais oubliés",
  description:
    "Recense repère les abonnements logiciels inutilisés et les doublons dans votre entreprise, avant qu'ils ne vous coûtent cher.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
