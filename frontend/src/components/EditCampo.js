/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'bulma/css/bulma.css';

const EditCampo = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const updateCampo = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8081/campos/${id}`, {
            nome: nome,
            tipo: tipo
        });
        navigate("/");
    }

    useEffect(() => {
        getCampoById();
    }, []);

    const getCampoById = async () => {
        const response = await axios.get(`http://localhost:8081/campos/${id}`);
        setNome(response.data.nome);
        setTipo(response.data.tipo);
    }

    return (
        <div>
            <form onSubmit={updateCampo}>
                <div className="field">
                    <label className="label">Nome</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite o novo Nome!"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
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
                    <button className="button is-primary">Atualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditCampo;
