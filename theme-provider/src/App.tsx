
import { ThemeProvider } from 'styled-components'
import './App.css'
import { useState } from 'react'
import { darkTheme, lightTheme } from './theme/theme'
import { GlobalStyle } from './theme/GlobalStyle'
import { Button } from './ui/atom/button/Button'
import { DashBoard } from './pages/DashBoard'

function App() {
 
// const[mode,setMode] = useState<'light'|'dark'>('light');
// const toggleTheme = ()=>{
//   setMode(mode === 'light'?'dark':'light');
// }
  return (
    <>
      
      {/* <h1>click the button to switch between light and dark mode</h1>
      <Button onClick={toggleTheme}>Switch Theme</Button> */}
      <DashBoard/>
     
    </>
  )
}

export default App
