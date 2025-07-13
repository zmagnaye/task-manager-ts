import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider domain = "dev-7ydcmj3k2ymlabpp.us.auth0.com" clientId = "wXuqwAP7rxKlJbAE9rg4Dj40IDAis4MW" authorizationParams={{ redirect_uri: window.location.origin }}>
      <App />
    </Auth0Provider>
  </StrictMode>
  
)
