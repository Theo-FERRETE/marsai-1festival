import { useState } from 'react';
import Button from '../../components/Button'; // Import du nouveau composant

function SubmissionForm() {
  
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    title: '', description: '', country: '',
    aiToolsUsed: '', youtubeUrl: '', acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) return;
    setIsSubmitting(true);
    console.log("📦 Données :", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Candidature envoyée.");
    }, 1500);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-slate-300 focus:text-white focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all placeholder-white/20 font-sans text-base";
  const labelClass = "block text-xs font-bold text-white mb-2 font-sans uppercase tracking-[0.15em]";

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto backdrop-blur-sm bg-black/40 p-8 md:p-12 border border-white/10 shadow-2xl relative">
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-indigo-500/50"></div>

      {/* --- BLOC IDENTITÉ --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="firstName" className={labelClass}>Prénom</label>
          <input type="text" id="firstName" name="firstName" required placeholder="JEAN" className={inputClass} value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Nom</label>
          <input type="text" id="lastName" name="lastName" required placeholder="DUPONT" className={inputClass} value={formData.lastName} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email de contact</label>
        <input type="email" id="email" name="email" required placeholder="jean.dupont@email.com" className={inputClass} value={formData.email} onChange={handleChange} />
      </div>

      <div className="flex items-center gap-4 my-10 opacity-40">
        <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-grow"></div>
        <span className="text-white text-xs tracking-widest uppercase">Le Film</span>
        <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-grow"></div>
      </div>

      {/* --- BLOC FILM --- */}
      <div>
        <label htmlFor="country" className={labelClass}>Pays de production</label>
        <input type="text" id="country" name="country" required placeholder="FRANCE" className={inputClass} value={formData.country} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="title" className={labelClass}>Titre du film</label>
        <input type="text" id="title" name="title" required placeholder="TITRE ORIGINAL" className={inputClass} value={formData.title} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>Synopsis</label>
        <textarea id="description" name="description" rows="4" maxLength="500" required placeholder="Pitch du film en quelques lignes..." className={inputClass} value={formData.description} onChange={handleChange} />
        <p className="text-[10px] text-white/30 text-right mt-1 tracking-wider">MAX 500 CARACTÈRES</p>
      </div>

      <div>
        <label htmlFor="youtubeUrl" className={labelClass}>Lien du film (YouTube / Vimeo)</label>
        <input type="url" id="youtubeUrl" name="youtubeUrl" required placeholder="HTTPS://..." className={inputClass} value={formData.youtubeUrl} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="aiToolsUsed" className={labelClass}>Outils IA utilisés (Détails)</label>
        <textarea id="aiToolsUsed" name="aiToolsUsed" rows="3" required placeholder="Listez les outils utilisés..." className={inputClass} value={formData.aiToolsUsed} onChange={handleChange} />
      </div>

      {/* --- VALIDATION --- */}
      <div className="pt-6 border-t border-white/5 mt-8">
        <label className="flex items-center gap-4 cursor-pointer group">
          <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} className="w-5 h-5 rounded-none border border-white/30 bg-transparent text-indigo-500 focus:ring-0 checked:bg-indigo-500 checked:border-transparent" />
          <span className="text-slate-400 group-hover:text-white transition-colors font-sans text-xs tracking-wide uppercase">
            Je certifie être l'auteur et j'accepte le règlement.
          </span>
        </label>
      </div>

      <div className="flex justify-center pt-8">
        {/* Utilisation du nouveau composant Button */}
        <Button 
          type="submit" 
          disabled={!formData.acceptTerms || isSubmitting}
        >
          {isSubmitting ? 'Envoi...' : 'Soumettre le film'}
        </Button>
      </div>

    </form>
  );
}

export default SubmissionForm;