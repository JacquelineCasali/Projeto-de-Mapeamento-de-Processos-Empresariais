import { useEffect, useState } from "react";

import "./processo.css";

import { getAreas, getProcessosPorArea } from "../../services/processoService";
import { Link } from "react-router-dom";





const Processo = () => {
  const [areas, setAreas] = useState([]);
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [processos, setProcessos] = useState([]);
  const [visibilidade, setVisibilidade] = useState({})
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
        const visibilidadeInicial = {};
        data.forEach((processo) => {
          visibilidadeInicial[processo.id] = false;
        });
        setVisibilidade(visibilidadeInicial);


      } catch (error) {
        console.error("Erro ao buscar processos", error);
      }
    } else {
      setProcessos([]);
    }
  };
  const toggleVisibilidade = (processoId) => {
    setVisibilidade((prev) => ({
      ...prev,
      [processoId]: !prev[processoId],
    }));
  };
  return (
    <div className="container">

      <Link to="/cadastro/processo">Cadastrar Processo</Link>
      
      <h1>Processos por Área</h1>
      <div className="form-group">
       
        <select value={areaSelecionada} onChange={handleSelectArea}>
          <option value="">Selecione uma Área</option>
          {areas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.nome}
            </option>
          ))}
        </select>
      </div>

      {processos.length === 0 ? (
        <p>Selecione uma área para mostrar os processo </p>
      ) : (
        processos.map((processo) => (
          <div key={processo.id} className="processo-card">
            <h2>{processo.nome}</h2>
            {/* <p><strong>Área:</strong> {processo.area.nome}</p> */}
            <p>{processo.descricao}</p>

            {processo.subprocessos?.length > 0 && (
              <div className="subprocessos-container">
    <button className="btn-toggle" onClick={() => toggleVisibilidade(processo.id)}>
                  {visibilidade[processo.id] ? "Recolher" : "Expandir"}
                </button>

                {visibilidade[processo.id] && (
                <ul>
                  {processo.subprocessos?.map((sub) => (
                    <li key={sub.id}>{sub.nome} - {sub.descricao}</li>
                  ))}
                </ul>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Processo;