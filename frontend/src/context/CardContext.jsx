import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const CardContext = createContext({});
export default function CardProvider({ children }) {
  const [busca, setBusca] = useState("");
  const [areas, setAreas] = useState([]);
  const [processos, setProcessos] = useState([]);
  const [subprocessos, setSubprocessos] = useState([]);
 
  const searchLowerCase = busca.toLowerCase();
  const areaFilter = areas.filter(
    (p) => p.nome.toLowerCase().includes(searchLowerCase)
   
  );
  const dados = processos.filter(
    (p) => p.nome.toLowerCase().includes(searchLowerCase)
    //  funcionario.job.toLowerCase().includes(searchLowerCase)||
    //  funcionario.phone.toLowerCase().includes(searchLowerCase)
  );
  const sub = subprocessos.filter(
    (p) => p.nome.toLowerCase().includes(searchLowerCase)
    //  funcionario.job.toLowerCase().includes(searchLowerCase)||
    //  funcionario.phone.toLowerCase().includes(searchLowerCase)
  );


  useEffect(() => {
    //  banco de dados

    try {
      api
        .get(`/area/`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setAreas(res.data);
        });
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    
    }
  }, []);
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
    //  banco de dados
    const fetchSubprocessos = async () => {
      try {
        api
          .get(`/subprocesso `, {
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
  }, []);



 


  return (
    <CardContext.Provider
      value={{ dados, setProcessos, busca, setBusca, subprocessos, sub ,areaFilter,areas}}
    >
      {children}
    </CardContext.Provider>
  );
}
