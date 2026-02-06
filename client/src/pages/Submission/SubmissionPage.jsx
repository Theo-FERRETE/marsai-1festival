import SubmissionForm from './SubmissionForm';

function SubmissionPage() {
  return (
    // On garde le fond midnight (qui est maintenant NOIR grâce au changement précédent dans le CSS)
    <div className="min-h-screen bg-midnight text-white font-sans selection:bg-indigo-500/30 pt-24 pb-20">
      
      {/* --- BLOC HAUT : TITRE + BRIEF COMPACT --- */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        
        {/* L'ancien "Appel à projet" devient le titre principal en petit, tout en haut */}
        <h1 className="text-indigo-400 uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-8">
          Soumettre votre film
        </h1>

        {/* Le texte explicatif remonte ici */}
        <p className="text-xl md:text-2xl leading-relaxed text-slate-200 font-light mb-6">
          Nous recherchons des courts-métrages d'<strong className="text-white font-bold">1 minute</strong>, 
          créés entièrement via l'IA, sur le thème :
        </p>
        
        {/* Le Thème */}
        <p className="font-serif italic text-3xl md:text-4xl text-white">
          "Imaginer des futurs souhaitables"
        </p>

      </div>

      {/* --- LES RÈGLES (Remontées et chiffres en BLANC) --- */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/20 pt-10">
          
            {/* Règle 1 */}
            <div className="text-center">
              <span className="text-5xl font-serif text-white block mb-4">01</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Ouvert à tous</h3>
              <p className="text-slate-400 text-sm">Amateurs ou pros, sans distinction.</p>
            </div>

            {/* Règle 2 */}
            <div className="text-center">
              <span className="text-5xl font-serif text-white block mb-4">02</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">60 Secondes</h3>
              <p className="text-slate-400 text-sm">Générique inclus. Pas une de plus.</p>
            </div>

            {/* Règle 3 */}
            <div className="text-center">
              <span className="text-5xl font-serif text-white block mb-4">03</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">100% IA</h3>
              <p className="text-slate-400 text-sm">Génération visuelle et sonore.</p>
            </div>

        </div>
      </div>

      {/* --- LE FORMULAIRE --- */}
      <div className="px-4">
        {/* Le conteneur du formulaire est géré dans le composant lui-même maintenant */}
        <SubmissionForm />
      </div>

    </div>
  );
}

export default SubmissionPage;