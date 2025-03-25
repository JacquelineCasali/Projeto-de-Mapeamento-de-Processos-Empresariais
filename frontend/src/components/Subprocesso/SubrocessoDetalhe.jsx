import React  from "react";


const SubrocessoDetalhe = ({subprocesso}) => {
  const { nome, descricao } = subprocesso;

 


  return (
    <div className="subprocesso-card">
  
  <h2>{nome}</h2>
  <p>{descricao}</p>
         
    </div>
  );
};

export default SubrocessoDetalhe;
