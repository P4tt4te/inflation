import { useState } from 'react'
import logo from './logo.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
import Convert from './Convert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans">
      <header className="bg-blue-600 p-5 text-white">
        <div className="text-3xl font-semibold">
          <h1>Calcul inflation.</h1>
        </div>
          
      </header>
      <Convert />
      <footer className="fixed inset-x-0 bottom-0 m-5 flex justify-between">
          <div className="flex space-x-3">
            <p>Made with</p>
            <img height="40" width="40" src={logo}></img>
          </div>
          <div className="flex space-x-3">
            <a href="https://github.com/P4tt4te">
              <img src={github}></img>
            </a>
            <a href="https://www.linkedin.com/in/edwbr/">
              <img src={linkedin}></img>
            </a>
          </div>
      </footer>
    </div>
  )
}

export default App
