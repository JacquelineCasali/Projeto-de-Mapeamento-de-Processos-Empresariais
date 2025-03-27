import { useState,useContext } from "react";
import "./processo.css";
import { getProcessosPorArea } from "../../services/processoService";
import { useNavigate } from "react-router-dom";
import AreaDetalhe from "../Area/AreaDetalhe";
import ProcessoDetalhe from "./ProcessoDetalhe";
import Title from "../Title/Tlite";
import { CardContext } from "../../context/CardContext";
const Processo = () => {
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const {dados, setProcessos,areas} = useContext(CardContext);
  const navigate = useNavigate();

  const handleSelectArea = async (event) => {
    const areaId = event.target.value;
    setAreaSelecionada(areaId);

    if (areaId) {
      try {
        const data = await getProcessosPorArea(areaId);
        setProcessos(data);
      } catch (error) {
        console.error("Erro ao buscar processos", error);
      }
    } else {
      setProcessos([]);
    }
  };
  function ClickEdit(id) {
    navigate("/cadastrar/processo/" + id);
  }

  return (
    <div className="container">
    
       <div className="form-group">
        <Title text="Filtrar processos Por Àrea" theme={"h2"} />
    <select value={areaSelecionada} onChange={handleSelectArea}>
          <option value="">Selecione uma Área</option>
          {areas.map((area) => (
                
            <AreaDetalhe key={area.id} area={area} />
          ))}
        </select> 
      </div>
      <Title text="Lista de Processos" theme={"h2"} />

      {dados.length === 0 ? (
   <p>Sem Processo cadastrado nessa área</p>
      ) : (
        dados.map((processo) => (
          <ProcessoDetalhe key={processo.id} processo={processo}
            clickEdit={ClickEdit} 
              />
        ))
      )} 
    </div>
  );
};

export default Processo;
