import { MOCK_FILMS } from '../../data/mockData';
import { Play, Eye, MoreHorizontal } from 'lucide-react';

function FilmsList() {
  return (
    <div className="animate-fade-in"> {/* Petite animation d'apparition optionnelle */}
      
      {/* En-tête */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Films Soumis</h2>
          <p className="text-white/40">Gérez les candidatures et la modération.</p>
        </div>
        <div className="bg-[#262626] px-4 py-2 rounded text-sm text-white/60">
          Total: <span className="text-white font-bold">{MOCK_FILMS.length}</span>
        </div>
      </div>

      {/* Tableau Responsive */}
      <div className="bg-[#1a1a1a] rounded-lg border border-white/5 overflow-hidden shadow-xl">
        
        {/* C'est ici que la magie responsive opère : overflow-x-auto */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#262626] text-white/40 text-xs uppercase tracking-wider border-b border-white/5">
                <th className="p-4 font-medium">Statut</th>
                <th className="p-4 font-medium">Film / Origine</th>
                <th className="p-4 font-medium">Réalisateur</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_FILMS.map((film) => (
                <tr key={film.id} className="hover:bg-white/5 transition-colors group">
                  
                  {/* Badge Statut */}
                  <td className="p-4">
                    <span className={`
                      text-[10px] font-bold uppercase px-2 py-1 rounded border
                      ${film.status === 'APPROVED' ? 'bg-green-500/10 text-green-400 border-green-500/20' : ''}
                      ${film.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : ''}
                      ${film.status === 'REJECTED' ? 'bg-red-500/10 text-red-400 border-red-500/20' : ''}
                      ${film.status === 'TO_MODIFY' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : ''}
                    `}>
                      {film.status}
                    </span>
                  </td>

                  {/* Info Film */}
                  <td className="p-4">
                    <div className="font-bold text-white text-sm">{film.title}</div>
                    <div className="text-xs text-white/30 mt-0.5 flex items-center gap-2">
                        <span>{film.country}</span>
                    </div>
                  </td>

                  {/* Info Réalisateur */}
                  <td className="p-4 text-sm text-white/70">
                    <div className="flex flex-col">
                        <span>{film.director}</span>
                        <span className="text-xs text-white/30">{film.email}</span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="p-4 text-xs text-white/40">
                    {new Date(film.submittedAt).toLocaleDateString()}
                  </td>

                  {/* Boutons Actions */}
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <button title="Voir" className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
                            <Eye size={16} />
                        </button>
                        <button title="Lien Youtube" className="p-2 hover:bg-indigo-500/20 hover:text-indigo-400 rounded-full text-white transition-colors">
                            <Play size={16} />
                        </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FilmsList;