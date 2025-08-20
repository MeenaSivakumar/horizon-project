import styled from "styled-components"
import type { InputProps } from "./Input.types"

const Input = styled.input`
padding:5px;
margin:5px;
border:1px solid blue;
border-radius:10px;

`

export const InputField = ({placeholder,value,onChange,type}:InputProps)=>{
    return(
        <>
        <Input placeholder={placeholder} value={value} onChange={onChange} type={type} ></Input>
        </>
    )
}