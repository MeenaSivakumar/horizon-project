import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
margin:0,
font-family:sans-serif;
background:${({ theme }) => theme.colors.background};
color:${({ theme }) => theme.colors.text};
transition:background 0.25s ease, color 0.25s ease;}

`;
