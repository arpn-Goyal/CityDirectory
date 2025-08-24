import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/css/finder-icons.min.css';
import { AuthProvider } from './context/AuthContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <App />
    </AuthProvider>
  </StrictMode>,
)
