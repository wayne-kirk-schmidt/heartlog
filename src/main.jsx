import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'
import Journey from './Journey.jsx'
import Memories from './Memories.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/memories" element={<Memories />} />
          </Routes>
    </BrowserRouter>
  </StrictMode>,
)
