

import { ReactNode } from "react"
import "./styles.css"

interface TitleProps{
  children:ReactNode
}

export default function Title({children}:TitleProps) {
  return <h1 className="h1">{children}</h1>
   
  
 
}
