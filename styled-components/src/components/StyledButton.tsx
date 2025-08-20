import styled from "styled-components";

interface ButtonProps{
    primary?:boolean;
}
const Button = styled.button<ButtonProps>`
background:${(props)=>(props.primary ? 'blue':'red')};
border:1px solid white;
border-radius:15px;
padding:5px;
color: white;
width:100px;
height:50px;
&:hover{background:green;}
margin:5px;
&:active{transform:translateY(-10px);}`;

export const StyledButton =({})=>{
    return(
        <>
    <Button >Click Me</Button>
    <Button primary >Primary Button</Button>
        </>
    )
}