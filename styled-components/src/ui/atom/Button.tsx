import styled from "styled-components";
import type { ButtonProps } from "./Button.types";


const ButtonStyle = styled.button<{$primary?:boolean}>`
background:${(props)=>(props.$primary ? 'blue':'red')};
border:1px solid white;
border-radius:15px;
padding:5px;
color: white;
width:100px;
height:50px;
&:hover{background:green;}
margin:5px;
&:active{transform:translateY(-10px);}`
;


export const Button =({label,primary,...rest}:ButtonProps)=>{
    return(
        <>
         <ButtonStyle {...rest}  $primary={primary}>{label}</ButtonStyle>
        </>
    )
};