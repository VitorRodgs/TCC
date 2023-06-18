import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import CampoForm from './CampoForm';

const VerificaCampo = () => {
  const [campos, setCampo] = useState([]);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    getCampos();
  }, []);

  const getCampos = async () => {
    const response = await axios.get('http://localhost:8081/campos');
    setCampo(response.data);
  };

  const saveForm = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8081/forms', {
      nome: nome,
      tipo: tipo
    });
  };

  function verifica(nome, tipo, id) {
    var Texto = 'Texto';
    var Numero = 'Numero';
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
    }
  }

  return (
    <form id='1' onSubmit={saveForm}>
      {campos.map((campo, index) => (
        <tr key={campo.id}>
          {verifica(campo.nome, campo.tipo, campo.id)}
        </tr>
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
