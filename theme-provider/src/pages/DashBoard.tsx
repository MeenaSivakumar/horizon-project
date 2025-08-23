import { useState } from "react"
import { DashboardHeader, Page } from "./DashBoardHeader"
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyle";
import { lightTheme, darkTheme } from "../theme/theme";
import { Button } from "../ui/atom/button/Button";

export const DashBoard = ({})=>{
const [mode,setMode] = useState<"light"|"dark">("light");

const toggleTheme =() => setMode(mode === "light" ? "dark" : "light");

    return(
        <>
        <ThemeProvider theme={mode === 'light'? lightTheme:darkTheme}>
      <GlobalStyle/>
      <Page>
         <DashboardHeader>
          <h1>Dashboard</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">Reports</a>
            <a href="#">Settings</a>
          </nav>
          <Button onClick={toggleTheme}>Change Theme</Button>
        </DashboardHeader>
        <section style={{ padding: "2rem" }}>
          <p>Welcome to your dashboard!</p>
        </section>
        </Page>
        </ThemeProvider>
        </>
    )
}