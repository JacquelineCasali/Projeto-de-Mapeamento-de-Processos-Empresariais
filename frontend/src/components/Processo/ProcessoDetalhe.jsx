import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import SubrocessoDetalhe from "../Subprocesso/SubrocessoDetalhe";
export default function ProcessoDetalhe({ processo }) {
  const { nome, descricao } = processo;
  const [selectedProcesso, setSelectedProcesso] = useState(null);
  const [isSeta, setIsSeta] = useState(false);
  const handleSelectProcesso = (processoId) => {
    setSelectedProcesso(processoId === selectedProcesso ? null : processoId);
  };
  return (
    <>
      <div className="processo-card">
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <div
          className="menu-sections"
          onClick={() => handleSelectProcesso(processo.id)}
        >
          <p>Subprocessos</p>
          {isSeta ? (
            <FiChevronUp
              onClick={() => setIsSeta(false)}
              size={26}
              cursor={"pointer"}
              color="#4F372F"
            />
          ) : (
            <FiChevronDown
              onClick={() => setIsSeta(true)}
              size={26}
              cursor={"pointer"}
              color="#4F372F"
            />
          )}
        </div>
        {isSeta && (
          <>
            {selectedProcesso === processo.id && (
              <div>
                <SubrocessoDetalhe processoId={processo.id} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
