import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Styles/Global.css"
import App from './App.tsx'
import AuthProvider from './context/AuthContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<AuthProvider>
<App />
</AuthProvider>
  

 
  </StrictMode>,
)
