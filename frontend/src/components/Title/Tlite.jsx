


import "./styles.css"



export default function Title(props) {
  return <h1 className={`${"h1"} ${props.theme === "h1-login" ?  "h1-login" : "h2" }`}
  
  
  >{props.text}</h1>
   
  
 
}
