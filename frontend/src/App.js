import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CampoList from "./components/CampoList";
import AddCampo from "./components/AddCampo";
import EditCampo from "./components/EditCampo";
import CombinedPage from "./components/PaginaInicial";
import 'bulma/css/bulma.css';
import VerificaCampo from "./components/VerificaCampo";
import AddForm from "./components/AddForm";
import AddUsuario from "./components/AddUsuario";
import AddPergunta from "./components/AddPergunta";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route exact path="/" element={<CampoList/>}>
              </Route>
              <Route path="/add" element={<AddCampo/>}>
              </Route>
              <Route path="/edit/:id" element={<EditCampo/>}>
              </Route>
              <Route path="/form" element={<VerificaCampo/>}>
              </Route>
              <Route path="/combined" element={<CombinedPage/>}>
              </Route>
              <Route path="/addform" element={<AddForm/>}>
              </Route>
              <Route path="/paginainicial" element={<AddUsuario/>}>
              </Route>
              <Route path="/addpergunta" element={<AddPergunta/>}>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
