// components/ProcessoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubprocessoList from './SubprocessoList';

const ProcessoList = () => {
  const [processos, setProcessos] = useState([]);
  const [selectedProcesso, setSelectedProcesso] = useState(null);

  useEffect(() => {
    const fetchProcessos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/processos');
        setProcessos(response.data);
      } catch (error) {
        console.error('Erro ao buscar processos:', error);
      }
    };

    fetchProcessos();
  }, []);

  const handleSelectProcesso = (processoId) => {
    setSelectedProcesso(processoId === selectedProcesso ? null : processoId);
  };

  return (
    <div className="processo-list">
      <h2>Lista de Processos</h2>
      <ul>
        {processos.map((processo) => (
          <li key={processo.id}>
            <div className="processo-item" onClick={() => handleSelectProcesso(processo.id)}>
              <h3>{processo.nome}</h3>
              <p>{processo.descricao}</p>
            </div>
            {selectedProcesso === processo.id && <SubprocessoList processoId={processo.id} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessoList;