import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.css';

const AddForm = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();
    
    const saveForm = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8081/formularios', {
            nome: nome,
            descricao: descricao
          });
          alert('Formulário criado com sucesso!');
          navigate("/add");
        } catch (error) {
          console.error(error);
          alert('Ocorreu um erro ao criar o formulário. Por favor, tente novamente.');
        }
      };
    return (
        <div>
            <form onSubmit={saveForm}>
                <div className="field">
                    <label className="label">Nome do Formulário</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite o nome do Formulário"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}>
                    </input>
                </div>

                <div className="field">
                    <label className="label">Descrição do Formulário</label>
                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Digite uma descrição do Formulário"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div><br /></div>
                <div className="field">
                    <button className="button is-info">Criar Campos</button>
                </div>
            </form>
        </div>
    )
}

export default AddForm;
