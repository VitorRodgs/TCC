import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.css';

const AddPergunta = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const navigate = useNavigate();

    const savePergunta = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8081/usuarios/${1}`);
            const user = response.data;

            await axios.post(`http://localhost:8081/usuarios/${user._id}/campos`, {
                nome: nome,
                tipo: tipo
            });

            navigate("/");
        } catch (error) {
            console.error('Erro ao consultar o ID do usuário:', error);
        }
    }

    return (
        <div>
            <form onSubmit={savePergunta}>
                <div className="field">
                    <label className="label">Nome</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite o nome do Campo!"
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
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <option value="Nenhum">Nenhum</option>
                            <option value="Texto">Caixa de Texto</option>
                            <option value="Numero">Numero</option>
                            <option value="Select">Select</option>
                            <option value="Checkbox">Checkbox</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="field">
                    <button className="button is-info">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default AddPergunta;
