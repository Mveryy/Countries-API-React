import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ContextAPIProvider } from './context/ContextAPI'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextAPIProvider>
        <App />
      </ContextAPIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
