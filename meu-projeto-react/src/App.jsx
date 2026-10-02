import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx";


export default function App() {

  const [count, setCount] = useState(0)
      return (
          <>
      <Navbar>
      </Navbar>
         <button onClick={() => setCount(count + 1)}></button>


      </>
  )
}

