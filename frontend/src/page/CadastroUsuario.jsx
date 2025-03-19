import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { MdOutlineEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import "../components/Login/login.css";
import api from "../services/api";
import Title from "../components/Title/Tlite";

const CadastroUsuario = () => {
  
  const [isShow, setIsShow] = useState(false);

  const [message, setMessage] = useState("");
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [values, setValues] = useState({
    nome: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    //  banco de dados

    try {
      api.get(`/user/` + id).then((res) => {
        setValues(res.data);
        setMessage(res.data.message);
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
      const response = 
      id>0 ? await api.put(`/user/` + id, values,{
        headers: { Authorization: `Bearer ${token}` }
      }):  await api.post("/user", values);
      
      
      if (response.data) {
        navigate("/");
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
    
    <form onSubmit={SaveEdit} className="form">
      <div className="formulario-login">
 
   <Title>{id > 0 ? "Editar usuário" : "Cadastrar usuário"}</Title>

   <div className="input-senha">
     
     
     
          <input
            className="form-control  text-secondary"
            type="text"
            placeholder="Nome"
            value={values.nome}
            onChange={(e) => setValues({ ...values, nome: e.target.value })}
          />
          <FaUser className="icon text-secondary" />
        </div>
        <div className="input-senha">
          <input
            className="form-control text-secondary"
            type="email"
            placeholder="Digite o Email"
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, email: e.target.value })
            }
         
          />
          <MdOutlineEmail size={20} className="icon text-secondary" />
        </div>
        <div className="input-senha">
          <input
            className="form-control text-secondary"
            type={isShow ? "text" : "password"}
            placeholder="Crie sua senha"
            value={values.password}
            onChange={(e) =>
              setValues({ ...values, password: e.target.value })}
            required
          />
          {/* visualizar senha */}
          {isShow ? (
            <MdVisibilityOff
              size={20}
              className="icon text-secondary"
              onClick={() => setIsShow(!isShow)}
              cursor={"pointer"}
            />
          ) : (
            <MdVisibility
              size={20}
              className="icon text-secondary "
              onClick={() => setIsShow(!isShow)}
              cursor={"pointer"}
            />
          )}
        </div>

        {/* <div className="input-senha">
          <input
            className="form-control text-secondary"
            type={isCon ? "text" : "password"}
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {isCon ? (
            <MdVisibilityOff
              size={20}
              className="icon text-secondary"
              onClick={() => setIsCon(!isCon)}
              cursor={"pointer"}
            />
          ) : (
            <MdVisibility
              size={20}
              className="icon text-secondary "
              onClick={() => setIsCon(!isCon)}
              cursor={"pointer"}
            />
          )}
        </div> */}

        <button
       
         className="btn-login"
          type="submit"
        >
          {id?"Editar":"Cadastrar"}
          
        </button>

        {message? 
          <div className="alert alert-danger" role="alert">
            {message}
          </div>:""
        }

        <Link className="text-esqueceu" to="/">Faça Login aqui</Link>
        </div>
   
      </form>
    </section>
  );
};

export default CadastroUsuario;
