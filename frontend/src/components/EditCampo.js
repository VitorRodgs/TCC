/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'bulma/css/bulma.css';

const EditCampo = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const navigate = useNavigate();
    const { id } = useParams;

    const updadeCampo = async (e) => {
        e.prevevntDefaut();
        await axios.patch(`http://localhost:8081/campos/${id}`, {
            nome: nome,
            tipo: tipo
        });
        navigate.push("/");
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
            <form onSubmit={ updadeCampo }>
                <div className="field">
                    <label className="label">Nome</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite o novo Nome!"
                        value={ nome }
                        onChange={ (e) => setNome(e.target.value) }>
                        </input>
                </div>

                <div className="field">
                    <label className="label">Tipo</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite o novo Tipo!"
                        value={ tipo }
                        onChange={ (e) => setTipo(e.target.value) }
                        ></input>
                </div>

                <div className="field">
                    <button className="button is-primary">Atualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditCampo