import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Edital from './Edital';
import Propostas from './Propostas';

import PropostaList from './components/PropostaList';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
      <Header/>
      <h1>Lista de Editais</h1>
      <TodoList/>
      <h1>Lista de Propostas</h1>
      <PropostaList/>
      <Routes>
        <Route path="/Edital" element={<Edital />} />
		    <Route path="/Propostas" element={<Propostas />} />
      </Routes>
    </div>
  );
}

export default App;
