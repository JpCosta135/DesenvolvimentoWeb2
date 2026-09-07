import { useState } from 'react'
import './App.css'
import { HeroSection } from './Components/HeroSection.jsx'
import { NextSteps } from './Components/NextSteps.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <div className="ticks"></div>
      <NextSteps />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App