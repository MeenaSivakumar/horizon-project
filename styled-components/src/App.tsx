import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StyledButton } from './components/StyledButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <StyledButton/>
    </>
  )
}

export default App
