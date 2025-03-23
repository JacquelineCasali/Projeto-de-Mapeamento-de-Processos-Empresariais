import { useEffect, useState } from "react";

import "./processo.css";

import { getAreas, getProcessosPorArea } from "../../services/processoService";
import { Link } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import AreaDetalhe from "../Area/AreaDetalhe";
import ProcessoDetalhe from "./ProcessoDetalhe";

import Loading from "../Loading/Loading";
import Title from "../Title/Tlite";
import { toast } from "react-toastify";
import api from "../../services/api";
const Processo = () => {
  const [areas, setAreas] = useState([]);
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [processos, setProcessos] = useState([]);
  
  useEffect(() => {
    //  banco de dados

    try {
      api
        .get(`/processo/`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setProcessos(res.data);
        });
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    
    }
  }, []);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const data = await getAreas();
        setAreas(data);
      } catch (error) {
        console.error("Erro ao buscar áreas", error);
      }
    };
    fetchAreas();
  }, []);

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

  return (
    <div className="container">
      <Link to="/cadastro/processo">Cadastrar Processo</Link>

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

      {processos.length === 0 ? (
        <Loading />
      ) : (
        processos.map((processo) => (
         
            <ProcessoDetalhe key={processo.id} processo={processo} />
           
          
         
        ))
      )}
    </div>
  );
};

export default Processo;
