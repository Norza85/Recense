export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-paper text-ink px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Mentions legales</h1>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Editeur du site</h2>
        <p className="text-ink/70">
          [Raison sociale ou nom et prenom]<br />
          [Forme juridique - ex: auto-entrepreneur, SASU...]<br />
          [Adresse du siege social]<br />
          SIRET : [numero SIRET]<br />
          Email : [ton email de contact]
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Directeur de la publication</h2>
        <p className="text-ink/70">[Ton nom]</p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Hebergement</h2>
        <p className="text-ink/70">
          Vercel Inc.<br />
          340 S Lemon Ave #4133, Walnut, CA 91789, Etats-Unis
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Contact</h2>
        <p className="text-ink/70">[ton email de contact]</p>
      </section>
    </main>
  );
}
