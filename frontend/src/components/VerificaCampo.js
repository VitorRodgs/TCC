import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';

const VerificaCampo = () => {
    const [campos, setCampo] = useState([]);

    useEffect(() => {
        getCampos();
    }, []);

    const getCampos = async () => {
        const response = await axios.get('http://localhost:8081/campos');
        setCampo(response.data);
    }

    function verifica(nome, tipo, id){
        var Texto = 'Texto'
        var Numero = 'Numero'
        //console.log(id+nome) concatenando id e o nome
        if(tipo === Texto){
            return(
                <div>
                    <label className="label" for="textinput">{ nome }</label>  
                    <div>
                        <input id={id} className='input' name={nome} type="text" placeholder="Digite o Texto!"></input>
                    </div>
                </div>
            )
            
        }else if (tipo === Numero){
            return(
                <div>
                    <label className='label' for="textinput">{ nome }</label>  
                    <div>
                        <input id={id} className='input' name={nome} type="number" placeholder="Digite seu Número!"></input>
                    </div>
                </div>
            )
        }
    }

    return (
        <form id='1'>
            { campos.map((campo, index) => (
                <tr key = { campo.id }>
                    {verifica(campo.nome, campo.tipo, campo.id)
                    }
                    
                </tr>
            ))}
            <br></br>
            <div>
                <button type='submit' className='button is-info' form='1'>Criar Formulário</button>
                <br></br>
                <Link to="/" className="button is-info mt-2">Voltar</Link>
            </div>
        </form>
    )
}

export default VerificaCampo