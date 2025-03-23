
import Navbar from "../../components/Navbar/Navbar";


import Processo from "../../components/Processo/Processo";



export default function ProcessoPage({onLogout}) {

  


  return(
    <>
    <Navbar onClick={onLogout}/>
    <Processo/>

    </>
    
  )
 
  
  
}
