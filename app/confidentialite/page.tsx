export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-paper text-ink px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Politique de confidentialite</h1>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Donnees collectees</h2>
        <p className="text-ink/70">
          Lors de votre inscription, nous collectons votre adresse email et,
          le cas echeant, les informations que vous renseignez concernant
          votre entreprise et ses abonnements logiciels (nom des outils,
          couts, utilisateurs).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Utilisation des donnees</h2>
        <p className="text-ink/70">
          Ces donnees sont utilisees uniquement pour fournir le service
          Recense : afficher votre inventaire d'abonnements, calculer les
          couts, et vous envoyer les alertes de renouvellement. Elles ne sont
          ni vendues ni partagees avec des tiers a des fins commerciales.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Hebergement et sous-traitants</h2>
        <p className="text-ink/70">
          Vos donnees sont hebergees par Supabase (base de donnees) et
          Vercel (hebergement du site). Les paiements sont traites par
          Stripe, qui ne transmet aucune donnee bancaire a Recense.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Duree de conservation</h2>
        <p className="text-ink/70">
          Vos donnees sont conservees tant que votre compte est actif. En cas
          de suppression de compte, elles sont effacees sous 30 jours.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-bold mb-2">Vos droits</h2>
        <p className="text-ink/70">
          Conformement au RGPD, vous disposez d'un droit d'acces, de
          rectification et de suppression de vos donnees. Pour l'exercer,
          contactez [ton email de contact].
        </p>
      </section>
    </main>
  );
}
