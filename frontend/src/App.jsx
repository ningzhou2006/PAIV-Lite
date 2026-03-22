import { useState } from 'react'
import './App.css'
import PromptConverter from './components/PromptConverter'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🦞</span>
          <h1>PAIV-Lite</h1>
        </div>
        <p className="subtitle">Personal AI Identity & Values Protocol - Lite Version</p>
      </header>

      <main className="main">
        <PromptConverter />
      </main>

      <footer className="footer">
        <p>Built with ❤️ based on PAIV Protocol | <a href="https://github.com/taiguji/PAIV-Lite" target="_blank">GitHub</a></p>
      </footer>
    </div>
  )
}

export default App
