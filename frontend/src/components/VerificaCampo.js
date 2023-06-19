import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import CampoForm from './CampoForm';

const VerificaCampo = () => {
  const [campos, setCampos] = useState([]);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    getCampos();
  }, []);

  const getOpcoes = (campo) => {
    if (campo && campo.opcoes) {
      try {
        const opcoesArray = campo.opcoes; // Remover o JSON.parse
        if (Array.isArray(opcoesArray) && opcoesArray.length > 0) {
          return opcoesArray;
        }
      } catch (error) {
        console.error(error);
      }
    }
    return [];
  };
  

  const getCampos = async () => {
    try {
      const response = await axios.get('http://localhost:8081/campos');
      setCampos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/formularios', {
        nome: nome,
        tipo: tipo
      });
      alert('Formulário criado com sucesso!'); // Exemplo de mensagem de sucesso
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o formulário. Por favor, tente novamente.'); // Exemplo de mensagem de erro
    }
  };

  const renderOpcoes = (opcoes, id, nome) => {
    const opcoesArray = JSON.parse(opcoes);
    console.log(opcoesArray);
    return opcoesArray.map((opcao, index) => (
      <div key={index}>
        <input id={`${id}-opcao${index}`} className="input" name={nome} type="checkbox" value={opcao} />
        <label htmlFor={`${id}-opcao${index}`}>{opcao}</label>
      </div>
    ));
  };

  const verifica = (nome, tipo, id, opcoes) => {
    var Texto = 'Texto';
    var Numero = 'Numero';
    var Multipla = 'SelecaoMultipla';
    var Unica = 'EscolhaUnica';
    var Data = 'Data';
    var Selecao = 'CaixaSelecao';
  
    if (tipo === Texto) {
      return (
        <div>
          <label className="label" htmlFor="textinput">{nome}</label>
          <div>
            <input id={id} className='input' name={nome} type="text" placeholder="Digite o Texto!" />
          </div>
        </div>
      );
    } else if (tipo === Numero) {
      return (
        <div>
          <label className='label' htmlFor="textinput">{nome}</label>
          <div>
            <input id={id} className='input' name={nome} type="number" placeholder="Digite seu Número!" />
          </div>
        </div>
      );
    } else if (tipo === Multipla) {
      console.log(opcoes);
      return (
        <div>
          <label className="label" htmlFor={id}>{nome}</label>
          <div>
            <select id={id} className="input" name={nome}>
              <option value="">Selecione uma opção</option>
              {opcoes.map((opcao, index) => (
                <option key={index} value={opcao}>{opcao}</option>
              ))}
            </select>
          </div>
        </div>
      );
    } else if (tipo === Unica) {
      return (
        <div>
          <label className="label" htmlFor={id}>{nome}</label>
          {renderOpcoes(opcoes, id, nome)}
        </div>
      );
    } else if (tipo === Data) {
      return (
        <div>
          <label className="label" htmlFor={id}>{nome}</label>
          <div>
            <input id={id} className="input" name={nome} type="date" />
          </div>
        </div>
      );
    } else if (tipo === Selecao) {
      return (
        <div>
          <label className="label" htmlFor={id}>{nome}</label>
          {renderOpcoes(opcoes, id, nome)}
        </div>
      );
    }
  };
  

  if (campos.length === 0) {
    return <p>Carregando...</p>; // Exibir uma mensagem de carregamento enquanto os dados são buscados
  }

  return (
    <form id='1' onSubmit={saveForm}>
      {campos.map((campo, index) => (
        <div key={campo.id}>
          {verifica(campo.nome, campo.tipo, campo.id, getOpcoes(campo))}
        </div>
      ))}
      <br />
      <div>
        <button type='submit' className='button is-info' form='1'>Criar Formulário</button>
        <br />
        <Link to="/" className="button is-info mt-2">Voltar</Link>
      </div>
    </form>
  );
};

export default VerificaCampo;
