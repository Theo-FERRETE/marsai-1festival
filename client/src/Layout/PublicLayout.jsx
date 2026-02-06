import { Outlet } from 'react-router-dom';
// Si tu as un composant Navbar ou Header, importe-le ici plus tard
// import Navbar from '../components/Navbar'; 

function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* <Navbar />  <-- Tu décommenteras ça quand tu voudras remettre ton menu */}
      
      <main className="flex-1 w-full">
        <Outlet /> {/* C'est ici que Home ou SubmissionPage s'affichera */}
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default PublicLayout;