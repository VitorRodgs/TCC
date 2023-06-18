import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
//import { getAllCampos } from '../../../backend/controllers/Forms';

const CampoList = () => {
    const [campos, setCampo] = useState([]);

    useEffect(() => {
        getCampos();
    }, []);

    const getCampos = async () => {
        const response = await axios.get('http://localhost:8081/campos');
        setCampo(response.data);
    }

    const deleteCampo = async (id) => {
        await axios.delete(`http://localhost:8081/campos/${id}`);
        getCampos();
    }

    return(
        <div>
            <Link to="/add" className="button is-info mt-2">Adicionar Novo</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nome do Campo</th>
                        <th>Tipo de Campo</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    { campos.map((campo, index) => (
                        <tr key = { campo.id }>
                            <td>{ index + 1 }</td>
                            <td> { campo.nome }</td>
                            <td> { campo.tipo } </td>
                            <td>
                                <Link to={`/edit/${campo.id}`} className="button is-small is-info"> Editar </Link>
                                <button onClick={ () => deleteCampo(campo.id) } className="button is-small is-danger">Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/form" className="button is-info mt-2">Ver Questionário</Link>
        </div>
    )
}

export default CampoList