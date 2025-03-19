import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";


import "../components/Formulario/Formulario.css"
import api from "../services/api";
import Title from "../components/Title/Tlite";

const CadastrarProcesso = () => {
  
 


  // const navigate = useNavigate();
  const navigate = useNavigate();
  const { id } = useParams();


  const [areas, setAreas] = useState([]);
 
  useEffect(() => {
  

    api.get("/area", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
   } )
      .then((response) => setAreas(response.data))
      .catch(() => alert("Erro ao carregar processo"));
  }, []);

 
  const [values, setValues] = useState({
    nome: "",
    descricao: "",
    areaId: "",
  });
  useEffect(() => {
    //  banco de dados

    try {
      api.get(`/processo/` + id,{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },

      }
      ).then((res) => {
        setValues(res.data);
       
      });
    } catch (err) {
      console.error(err);
      alert("Erro tente Novemante! Banco não conectado");
    }
  }, []);

  async function SaveEdit(e) {
    try {
      // intercepitação do evento
      e.preventDefault();

      if(!values.areaId){
alert("selecione uma área")
return
      }
      const response = 
      id>0 ? await api.put(`/processo/` + id, values,{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
       
      ):  await api.post("/processo", values,{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }

      );
      
      
      if (response.data) {
        navigate("/processo");
        window.location.reload();
        console.log(response.data);
      }
   
    } catch (err) {
      console.error(err);
      alert("Usuario já cadastrada");
    }
  }; 
  

  return (
    <section className="body">
  <div className="form-container">
    <Title>{id > 0 ? "Editar processo" : "Cadastrar processo"}</Title>
  
      <form onSubmit={SaveEdit}>
      <div className="form-group">
      <input type="text" 
       className="form-control  text-secondary"
     
       placeholder="Nome do Processo"
      value={values.nome}
            onChange={(e) => setValues({ ...values, nome: e.target.value })}
     required />
      </div>
      <div className="form-group">
          <label>Descrição:</label>
          <textarea
           value={values.descricao}
           onChange={(e) => setValues({ ...values, descricao: e.target.value })}
            placeholder="Descreva a descrição do processo"
           required />
        </div>
        <div className="form-group">
          <label>Área:</label>
          <select value={values.areaId} 
          onChange={(e) => setValues({ ...values, areaId: e.target.value })}
         >
            <option value="">Selecione uma área</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.nome}
              </option>
            ))}
          </select>
        </div>

     
        <button type="submit"
         className="btn-login"
         style={{width:"460px"}}
         >{id?"Editar":"Cadastrar"}</button>
       
        </form> 
     
    </div>
    </section>
  
  );
};

export default CadastrarProcesso;
