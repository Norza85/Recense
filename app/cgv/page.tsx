export default function CGV() {
  return (
    <main className="min-h-screen bg-paper text-ink px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Conditions generales de vente</h1>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Article 1 - Objet</h2>
        <p className="text-ink/70">
          Les presentes conditions generales de vente regissent l'utilisation
          du service Recense, edite par [raison sociale], accessible a
          l'adresse [ton nom de domaine].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Article 2 - Description du service</h2>
        <p className="text-ink/70">
          Recense est un service en ligne permettant aux entreprises de
          recenser leurs abonnements logiciels, d'identifier les comptes
          inutilises ou en doublon, et d'etre alertees avant chaque
          renouvellement annuel.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Article 3 - Prix et abonnement</h2>
        <p className="text-ink/70">
          Le service est propose au tarif de 79 euros HT par mois et par
          entreprise, sans engagement de duree. L'abonnement est facture
          mensuellement et reconduit automatiquement jusqu'a resiliation par
          le client, a tout moment, depuis son espace de compte.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Article 4 - Paiement</h2>
        <p className="text-ink/70">
          Le paiement s'effectue par carte bancaire via notre prestataire
          Stripe. Aucune donnee bancaire n'est conservee par [raison sociale].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Article 5 - Resiliation</h2>
        <p className="text-ink/70">
          Le client peut resilier son abonnement a tout moment depuis son
          espace de compte. La resiliation prend effet a la fin de la periode
          en cours, sans remboursement au prorata.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Article 6 - Contact</h2>
        <p className="text-ink/70">[ton email de contact]</p>
      </section>
    </main>
  );
}
