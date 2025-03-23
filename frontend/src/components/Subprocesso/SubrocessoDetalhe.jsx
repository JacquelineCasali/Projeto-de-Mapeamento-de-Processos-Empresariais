import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { toast } from "react-toastify";

const SubrocessoDetalhe = ({ processoId }) => {
  const [subprocessos, setSubprocessos] = useState([]);

  useEffect(() => {
    //  banco de dados
    const fetchSubprocessos = async () => {
      try {
        api
          .get(`/subprocesso?processoId=${processoId} `, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            setSubprocessos(res.data);
          });
      } catch (err) {
        console.error(err);
        toast.error(err.response.data.message);
      }
    };
    fetchSubprocessos();
  }, [processoId]);

  return (
    <div className="subprocesso-list">
      <h4>Subprocessos</h4>
      <ul>
        {subprocessos.length === 0 ? (
          <p>Este processo não possui subprocessos.</p>
        ) : (
          subprocessos.map((subprocesso) => (
            <li key={subprocesso.id}>
              <div className="subprocesso-item">
                <h5>{subprocesso.nome}</h5>
                <p>{subprocesso.descricao}</p>
                <p>{subprocesso.processoId}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SubrocessoDetalhe;
