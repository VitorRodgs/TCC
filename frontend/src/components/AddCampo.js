import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.css';

const AddCampo = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const navigate = useNavigate();

    const saveCampo = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8081/campos', {
            nome: nome,
            tipo: tipo
        });
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={ saveCampo }>
                <div className="field">
                    <label className="label">Nome</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite o nome do Campo!"
                        value={ nome }
                        onChange={ (e) => setNome(e.target.value) }>
                        </input>
                </div>

                <div>
                    <label className="label">Tipo de Campo</label>
                    <div className="select">
                    <select
                        required
                        type="text"
                        //placeholder="Digite o Tipo do Campo"
                        value={ tipo }
                        onChange={ (e) => setTipo(e.target.value) }>
                            <option value="Nenhum" selected>Nenhum</option>
                            <option value="Texto">Caixa de Texto</option>
                            <option value="Numero">Numero</option>
                            <option value="Select">Select</option>
                            <option value="Checkbox">Checkbox</option>
                        </select>
                    </div>
                </div>
                <div><br></br></div>
                <div className="field">
                    <button className="button is-info">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default AddCampo