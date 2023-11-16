import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className=' flex justify-center text-center'>
          <button onClick={() => setCount((count) => count + 1)}>
            plus
          </button>
          <p className="read-the-doc">count is {count}</p>
          <button onClick={() => setCount((count) => count - 0)}>
            reset
          </button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR <br />
          SECRET_KEY = {import.meta.env.VITE_SECRET_KEY} <br />
          API_KEY = {import.meta.env.VITE_API_KEY}
        </p>
      </div>
      <p className="read-the-docs text-violet-900">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
