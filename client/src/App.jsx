import './App.css'
import Home from './pages/Home.jsx'
import LoginAdmin from './pages/LoginAdmin.jsx'

function App() {
  const path = window.location.pathname.toLowerCase();
  if (path === '/loginadmin' || path === '/login-admin') {
    return <LoginAdmin />;
  }

  return <Home />;
}

export default App;