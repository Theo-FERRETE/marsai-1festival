import { useState } from "react";
// import './App.css' // ⚠️ Je te conseille de commenter cette ligne pour l'instant.
// Pourquoi ? App.css contient souvent des styles par défaut de Vite (centrage, padding)
// qui peuvent casser notre mise en page "Plein écran" avec Tailwind.

import Home from "./pages/Home.jsx";
import SubmissionPage from "./pages/Submission/SubmissionPage.jsx"; // 1. On importe la nouvelle page

function App() {
  return (
    // <Home />  <-- 2. On met un commentaire pour masquer l'accueil temporairement
    <SubmissionPage /> // <-- 3. On affiche la page de soumission
  );
}

export default App;
