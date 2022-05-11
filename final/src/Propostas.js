import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPropostaForm from './components/AddPropostaForm';
import PropostaList from './components/PropostaList';
import TotalCompleteItems from './components/TotalCompleteItems';

const Propostas = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h3>Crie uma proposta para o Edital</h3>
			<AddPropostaForm />
			<PropostaList />
			<TotalCompleteItems />
		</div>
	);
};

export default Propostas;
