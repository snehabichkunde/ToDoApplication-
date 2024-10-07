import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { ToDos } from './components/ToDos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateToDo></CreateToDo>
      <ToDos></ToDos>
    </div>
  )
}

export default App
