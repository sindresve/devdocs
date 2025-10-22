import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import NotFoundPage from './NotFoundPage.tsx';
import IRCPage from './pages/IRCPage.tsx';
import LandingPage from './LandingPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          />

          <Route
            path="/irc-server"
            element={
              <>
                <IRCPage />
              </>
            }
          />


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  </StrictMode>,
)
