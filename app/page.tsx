export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 max-w-xl mx-auto text-center">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide">
          Pour les PME de 10 a 100 salaries
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
          Vous payez des logiciels que plus personne n'utilise.
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Recense repere en quelques minutes les abonnements oublies, les
          doublons entre equipes, et vous alerte avant chaque renouvellement.
        </p>
        <a
          href="#essai"
          className="mt-8 inline-block w-full sm:w-auto bg-accent text-white font-semibold px-8 py-4 rounded-lg text-lg active:scale-95 transition"
        >
          Voir mes economies possibles
        </a>
        <p className="mt-3 text-sm text-ink/50">
          Gratuit a l'inscription - 79 euros/mois ensuite
        </p>
      </section>

      {/* Douleur chiffree */}
      <section className="px-6 py-10 bg-ink text-paper">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-5xl font-bold text-accent">30%</p>
          <p className="mt-2 text-lg">
            C'est la part moyenne des abonnements logiciels d'une PME qui ne
            sert plus a rien - sans que personne ne le sache.
          </p>
        </div>
      </section>

      {/* Benefices */}
      <section className="px-6 py-14 max-w-xl mx-auto">
        <div className="space-y-8">
          <div className="border-l-4 border-accent pl-4">
            <h3 className="font-bold text-lg">Tout votre parc, en un coup d'oeil</h3>
            <p className="mt-1 text-ink/70">
              Chaque outil, son cout annuel, qui l'utilise - fini les
              abonnements eparpilles entre services.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="font-bold text-lg">Les doublons demasques</h3>
            <p className="mt-1 text-ink/70">
              Deux equipes qui payent deux outils pour la meme chose ? Recense
              vous le signale avant que ca devienne une habitude.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="font-bold text-lg">Jamais surpris par un renouvellement</h3>
            <p className="mt-1 text-ink/70">
              Une alerte avant chaque echeance annuelle, le temps de decider
              si vous gardez ou vous coupez.
            </p>
          </div>
        </div>
      </section>

      {/* Preuve sociale placeholder */}
      <section className="px-6 py-10 bg-ink/5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-ink/50 italic">
            [Emplacement reserve - temoignages clients a venir]
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section id="essai" className="px-6 py-16 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Pret a voir ce que vous payez pour rien ?</h2>
        <a
          href="/inscription"
          className="mt-6 inline-block w-full sm:w-auto bg-accent text-white font-semibold px-8 py-4 rounded-lg text-lg active:scale-95 transition"
        >
          Commencer maintenant
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-ink/10 text-center text-sm text-ink/50">
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/mentions-legales" className="underline">Mentions legales</a>
          <a href="/cgv" className="underline">CGV</a>
          <a href="/confidentialite" className="underline">Confidentialite</a>
        </div>
      </footer>
    </main>
  );
}
