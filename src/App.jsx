import Journey from './components/Journey'
import Hero from './components/Hero'
import Navigasi from './components/Navigasi'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Tentang from './components/Tentang'
import './index.css'
import Contact from './components/Contact'
import { useEffect, useRef, useState } from 'react'

function App() {

  const [hamburger, setHamburger] = useState(false);

  function handleClickHamburger() {
    setHamburger(!hamburger)
  }

  return (
    <>
      <Navigasi hamburger={hamburger} handleClickHamburger={handleClickHamburger} />
      <main className={`transition duration-500`}>
        <Hero />
        <Tentang />
        <Skills />
        <Portfolio />
        <Journey />
        <Contact />
      </main>
      <div className={`fixed inset-0 bg-black/30 z-30 ${hamburger ? `block opacity-100` : `hidden opacity-0`}`} />
    </>
  )
}

export default App
