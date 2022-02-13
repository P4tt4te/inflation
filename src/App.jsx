import { useState } from 'react'
import logo from './logo.svg'
import Convert from './Convert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans">
      <header className="bg-blue-600 text-white">
        <div className="text-3xl font-semibold">
          <h1>Calcul inflation.</h1>
        </div>
          
      </header>
      <Convert />
    </div>
  )
}

export default App
