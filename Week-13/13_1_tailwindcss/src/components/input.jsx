import { Children } from "react"

export const Input=({
    onClick, 
    type,
    placeholder
}) =>{
    return  <span onClick={onClick} className= {`rounded-2xl, text-4xl px-2 `}>
        {Children}
    </span>
}