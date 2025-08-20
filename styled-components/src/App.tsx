
import './App.css'
import { Card } from './components/card/Card'
import { Button } from './ui/atom/Button'
import { InputField } from './ui/molecules/InputField'



function App() {
 

  return (
    <>  
    {/* <StyledButton/> */}
   <Button label="View More" primary onClick={() => { } } />
    <InputField placeholder='Enter Your Name' type="text" onChange={()=>{}} value='meena'/>
    <Card title="Styled Components" subtitle="Card created Using Styled Components"  children="React Styled-component Module allows us to write CSS within JavaScript in a very modular and reusable way in React. Instead of having one global CSS file for a React project, we can use styled-component to enhance the developer experience. It also removes the mapping between components and styles – using components as a low-level styling construct"/>
    </>
  )
}

export default App
