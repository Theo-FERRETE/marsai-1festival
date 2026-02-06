import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Connexion...", email);
    // Simulation de redirection vers le dashboard
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      
      <div className="max-w-md w-full bg-[#262626] p-8 rounded-lg shadow-2xl border border-white/10">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-widest uppercase mb-2">
            Admin <span className="text-indigo-500">Panel</span>
          </h1>
          <p className="text-white/40 text-sm">Accès réservé</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-white/60 mb-2">
              Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="admin@festival.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-white/60 mb-2">
              Mot de passe
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded uppercase tracking-widest text-sm"
          >
            Se connecter
          </button>
        </form>

      </div>
    </div>
  );
}

export default LoginAdmin;