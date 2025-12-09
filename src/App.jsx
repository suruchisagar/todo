import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddItem from './components/AddItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AddItem/>
    </div>
  )
}

export default App
