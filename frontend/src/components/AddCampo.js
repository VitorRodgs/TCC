import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.css';

const AddCampo = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [opcoes, setOpcoes] = useState([]);
  const navigate = useNavigate();

  const handleOpcaoChange = (index, e) => {
    const novasOpcoes = [...opcoes];
    novasOpcoes[index] = e.target.value;
    setOpcoes(novasOpcoes);
  };

  const adicionarOpcao = () => {
    setOpcoes([...opcoes, '']);
  };

  const excluirOpcao = (index) => {
    const novasOpcoes = [...opcoes];
    novasOpcoes.splice(index, 1);
    setOpcoes(novasOpcoes);
  };

  const handleSalvar = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8081/campos', {
        nome: nome,
        tipo: tipo,
        opcoes: opcoes
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      // Tratar erro ao salvar no banco de dados
    }
  };

  const renderOpcoesInputs = () => {
    return opcoes.map((opcao, index) => (
      <div key={index}>
        <label htmlFor={`opcao-${index}`}>Opção {index + 1}</label>
        <input
          id={`opcao-${index}`}
          className="input"
          type="text"
          value={opcao}
          onChange={(e) => handleOpcaoChange(index, e)}
        />
        <button onClick={() => excluirOpcao(index)}>Excluir Opção</button>
      </div>
    ));
  };

  return (
    <div>
      <form>
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
              <option value="Numero">Número</option>
              <option value="SelecaoMultipla">Seleção Múltipla</option>
              <option value="EscolhaUnica">Escolha Única</option>
              <option value="Data">Data</option>
              <option value="CaixaSelecao">Caixa de Seleção</option>
            </select>
          </div>
        </div>

        {tipo === 'SelecaoMultipla' ||
        tipo === 'EscolhaUnica' ||
        tipo === 'CaixaSelecao' ? (
          <div>
            <h3>Opções de Resposta:</h3>
            {renderOpcoesInputs()}
            <button type="button" onClick={adicionarOpcao}>
              Adicionar Opção
            </button>
          </div>
        ) : null}

        <div><br /></div>
        <div className="field">
          <button className="button is-info" onClick={handleSalvar}>Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default AddCampo;
