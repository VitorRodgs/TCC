import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import CampoForm from './CampoForm';
import './VerificaCampo.css';

const VerificaCampo = () => {
  const [campos, setCampos] = useState([]);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [link, setLink] = useState('');

  useEffect(() => {
    getCampos();
  }, []);

  const getOpcoes = (campo) => {
    if (campo && campo.opcoes) {
      try {
        const opcoesArray = campo.opcoes;
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
    } catch (error) {
      console.error(error);
    }
  };

  const saveForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/formularios', {
        nome: nome,
        tipo: tipo
      });
      const formId = response.data.id;
      const formLink = `https://www.exemplo.com/formulario/${formId}`;
      setLink(formLink);
      setPopupOpen(true);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o formulário. Por favor, tente novamente.');
    }
  };

  const renderOpcoes = (opcoes, id, nome) => {
    const opcoesArray = JSON.parse(opcoes);
    return opcoesArray.map((opcao, index) => (
      <div key={index}>
        <input id={`${id}-opcao${index}`} className="input" name={nome} type="checkbox" value={opcao} />
        <label htmlFor={`${id}-opcao${index}`}>{opcao}</label>
      </div>
    ));
  };

  const verifica = (nome, tipo, id, opcoes) => {
    const Texto = 'Texto';
    const Numero = 'Numero';
    const Multipla = 'SelecaoMultipla';
    const Unica = 'EscolhaUnica';
    const Data = 'Data';
    const Selecao = 'CaixaSelecao';

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

  const copyLink = () => {
    const linkInput = document.getElementById('linkInput');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    setCopied(true);
  };

  const resetCopied = () => {
    setCopied(false);
  };

  if (campos.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <form id="1" onSubmit={saveForm}>
      {campos.map((campo, index) => (
        <div key={campo.id}>
          {verifica(campo.nome, campo.tipo, campo.id, getOpcoes(campo))}
        </div>
      ))}
      <br />
      <div>
        <button type="submit" className="button is-info" form="1">
          Criar Questionário
        </button>
        <br />
        <Link to="/" className="button is-info mt-2">
          Voltar
        </Link>
      </div>

      {popupOpen && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card popup-content">
            <header className="modal-card-head">
              <p className="modal-card-title">Link do Questionário</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => {
                  setPopupOpen(false);
                  resetCopied();
                }}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Link:</label>
                <div className="control">
                  <input
                    id="linkInput"
                    className="input"
                    type="text"
                    value={link}
                    readOnly
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-small" onClick={copyLink}>
                {copied ? 'Link Copiado!' : 'Copiar Link'}
              </button>
            </footer>
          </div>
        </div>
      )}
    </form>
  );
};

export default VerificaCampo;
