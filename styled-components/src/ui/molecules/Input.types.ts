import type { InputHTMLAttributes, ReactHTMLElement, ReactNode } from "react";

export interface InputProps{
    placeholder:string;
    type:React.HTMLInputTypeAttribute;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    value:string;
}