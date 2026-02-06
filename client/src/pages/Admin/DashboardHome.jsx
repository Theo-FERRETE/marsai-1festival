import { KPI_STATS } from '../../data/mockData';
import { Film, Clock, CheckCircle, XCircle } from 'lucide-react';

function DashboardHome() {
  
  // Petite fonction pour générer une carte de stat
  const StatCard = ({ title, count, icon, color }) => (
    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5 flex items-center gap-4">
      <div className={`p-3 rounded-full bg-opacity-10 ${color.bg} ${color.text}`}>
        {icon}
      </div>
      <div>
        <p className="text-white/40 text-xs uppercase font-bold tracking-wider">{title}</p>
        <p className="text-2xl font-bold text-white">{count}</p>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Vue d'ensemble</h2>
      
      {/* Grille des statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Films" 
          count={KPI_STATS.total} 
          icon={<Film size={24} />} 
          color={{ bg: 'bg-indigo-500', text: 'text-indigo-400' }}
        />
        <StatCard 
          title="En Attente" 
          count={KPI_STATS.pending} 
          icon={<Clock size={24} />} 
          color={{ bg: 'bg-yellow-500', text: 'text-yellow-400' }}
        />
        <StatCard 
          title="Acceptés" 
          count={KPI_STATS.approved} 
          icon={<CheckCircle size={24} />} 
          color={{ bg: 'bg-green-500', text: 'text-green-400' }}
        />
        <StatCard 
          title="Refusés" 
          count={KPI_STATS.rejected} 
          icon={<XCircle size={24} />} 
          color={{ bg: 'bg-red-500', text: 'text-red-400' }}
        />
      </div>

      {/* Section vide pour l'instant (Graphiques ou Derniers ajouts) */}
      <div className="bg-[#1a1a1a] rounded-lg border border-white/5 p-8 text-center text-white/30 h-64 flex items-center justify-center">
        Zone pour les graphiques futurs ou les activités récentes
      </div>
    </div>
  );
}

export default DashboardHome;