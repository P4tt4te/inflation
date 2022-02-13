import { useState } from 'react'
import logo from './logo.svg'
import Convert from './Convert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-sky-700">
      <header className="App-header">
        <Convert />
      </header>
      
    </div>
  )
}

export default App
