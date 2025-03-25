
import { Link } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";
import Processo from "../../components/Processo/Processo";
import Title from "../../components/Title/Tlite";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import Search from "../../components/Search/Search"


export default function ProcessoPage() {

    const {busca,setBusca}=useContext(CardContext)


  return(
    <>


    <section className="section">
    <Title text="Processos" theme="h1"/>

   <div className="cabecalho">
   <Link 
        className="btn-cadastro" 
        to={`/cadastrar/processo`}>
                <IoMdAdd
              size={25}
             cursor="pointer"
        />
        Cadastro
                </Link>
                <Search busca={busca} setBusca={setBusca}/> 
   </div>
  
    </section>
        
   
    <Processo/>

    </>
    
  )
 
  
  
}
