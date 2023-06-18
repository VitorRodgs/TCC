import React from 'react';

function CampoForm({ nome, tipo, id }) {
  const Texto = 'Texto';
  const Numero = 'Numero';

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

  return null;
}

export default CampoForm;
