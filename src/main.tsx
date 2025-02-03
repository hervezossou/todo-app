import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/globals.css"
import ErrorBoundary from './components/ErrorBoundary.tsx'
import { AuthProvider } from './contexts/AuthProvider.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
)
