import './App.css'
import LoginAdmin from './pages/LoginAdmin.jsx'
import { useState } from "react"
import Header from './Layout/Header.jsx'

import Home from "./pages/Home/Home.jsx";
import SubmissionPage from "./pages/Submission/SubmissionPage.jsx"; // 1. On importe la nouvelle page

function App() {
  return (
    <>
    <Header />
    <Home /> 
    <SubmissionPage />
    </>
  );
}

export default App;
