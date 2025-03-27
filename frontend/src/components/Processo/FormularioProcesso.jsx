import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Styles/Formulario.css";
import { toast } from "react-toastify";
import api from "../../services/api";
import Title from "../Title/Tlite";
import Button from "../Button/Button";

import AreaDetalhe from "../Area/AreaDetalhe";
import { CardContext } from "../../context/CardContext";

const FormularioProcesso = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {areas} = useContext(CardContext);
const header={
 'headers':{
    'Content-Type':'multipart/form-data',

  } 
    }




  const [values, setValues] = useState({
    nome: "",
    descricao: "",
    responsavel:"",
    areaId: "",
    ferramentas:"",
    documentacao:""
  });
  useEffect(() => {
    //  banco de dados
//     //criando objeto com os dados

    try {
      api.get(`/processo/` + id, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}`
     
        },
        })
        .then((res) => {
          setValues(res.data);
        });
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
      // alert("Erro tente Novemante! Banco não conectado");
    }
  }, []);

  async function SaveEdit(e) {
    try {
      // intercepitação do evento
      e.preventDefault();

      if (!values.areaId) {
        toast.error("selecione uma área");
        return;
      }

      const formData=new FormData();
  
      const response =
        id > 0
          ? await api.patch(`/processo/` + id, values,{
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
               },header,
            })
          : await api.post("/processo", values, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              
              },header,
            });

      if (response.data) {
        navigate("/");
        window.location.reload();
        console.log(response.data);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    }
  }

  return (
 
      <section className="body">
        <div className="form-container">
          <Title>{id > 0 ? "Editar processo" : "Cadastrar processo"}</Title>

          <form onSubmit={SaveEdit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control  text-secondary"
                placeholder="Nome do Processo"
                value={values.nome}
                onChange={(e) => setValues({ ...values, nome: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control  text-secondary"
                placeholder="Responsáveis"
                value={values.responsavel}
                onChange={(e) => setValues({ ...values, responsavel: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Descrição:</label>
              <textarea
                value={values.descricao}
                onChange={(e) =>
                  setValues({ ...values, descricao: e.target.value })
                }
                placeholder="Descreva a descrição do processo"
           
              />
            </div>
            <div className="form-group">
              <label>Área:</label>
              <select
                value={values.areaId}
                onChange={(e) =>
                  setValues({ ...values, areaId: e.target.value })
                }
              >
                <option value="">Selecione uma área</option>
                       {areas.map((area) => (
                    <AreaDetalhe 
                    key={area.id}
                    area={area}/>
                        ))}
              </select>
            </div>

<input type="text"
 className="form-control  text-secondary"
 placeholder="ferramenta"
 autoComplete="ferramentas"
 value={values.ferramentas}
 onChange={(e) => setValues({ ...values, ferramentas: e.target.value })}
/>
<input type="file"
 className="form-control  text-secondary"
 placeholder="Responsáveis"
//  value={values.documentacao.files}
 onChange={(e) => setValues({ ...values, documentacao: e.target.files[0] })}
/>

   <Button text={id ? "Editar" : "Cadastrar"} theme={"roxo"}
   type="submit" />
                </form>
        </div>
      </section>
  
  );
};

export default FormularioProcesso;
