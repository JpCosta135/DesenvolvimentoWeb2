import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Fazendo requisição para o back-end Node.js
    fetch('http://localhost:5000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Erro ao buscar dados:', err))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Vite + Node.js</h1>
      <p>Mensagem do Servidor: <strong>{message || 'Carregando...'}</strong></p>
    </div>
  )
}

export default App