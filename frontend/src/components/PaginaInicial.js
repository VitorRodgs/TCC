import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import CampoList from './CampoList';
import VerificaCampo from './VerificaCampo';

// Componente para a página combinada
const CombinedPage = () => {
  //return (
    //<div>
      //<div className="half-page"><CampoList/></div>
      //<div className="half-page"><VerificaCampo/></div>
    //</div>
  //);
//   return (
//     <div className="columns">
//       <div className="column">
//         <CampoList />
//       </div>
//       <div className="columns">
//         <VerificaCampo />
//       </div>
//     </div>
//   );

    // return (
    //     <div className="columns is-fullheight">
    //     <div className="column is-half has-background-custom is-flex" style={{ height: '100%' }}>
    //         <CampoList />
    //     </div>
    //     <div className="column is-half has-background-white is-flex" style={{ height: '100%' }}>
    //         <VerificaCampo />
    //     </div>
    //     </div>
    // );

    return (
        <div className="columns is-fullheight">
          <div className="column is-half has-background-custom is-flex mr-3" style={{ height: '100%' }}>
            <CampoList />
          </div>
          <div className="column is-half has-background-white is-flex ml-3" style={{ height: '100%' }}>
            <VerificaCampo />
          </div>
        </div>
      );
};


export default CombinedPage
