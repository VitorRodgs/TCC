import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.css';

const AddUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8081/usuarios', {
            nome: nome,
            email: email
          });
          alert('Usuário criado com sucesso!');
          navigate("/addform");
        } catch (error) {
          console.error(error);
          alert('Ocorreu um erro ao criar o usuário. Por favor, tente novamente.');
        }
        
      };

    return (
        <div>
            <form onSubmit={ saveUser }>
                <div className="field">
                    <label className="label">Nome</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite seu Nome"
                        value={ nome }
                        onChange={ (e) => setNome(e.target.value) }>
                        </input>
                </div>

                <div>
                    <label className="label">E-mail</label>
                    <div className="label">
                    <input
                        className="input"
                        required
                        type="text"
                        placeholder="Digite seu E-mail"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }>
                        </input>
                    </div>
                </div>
                <div><br></br></div>
                <div className="field">
                    <button className="button is-info">Criar Usuario</button>
                </div>
            </form>
        </div>
    )
}

export default AddUsuario