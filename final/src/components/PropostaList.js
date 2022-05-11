import React, { useEffect } from 'react';
import PropostaItem from './PropostaItem';
import { useSelector, useDispatch } from 'react-redux';
import { getPropostasAsync } from '../redux/propostaSlice';
import { getTodosAsync } from '../redux/todoSlice';

const PropostaList = () => {
	const dispatch = useDispatch();
	const propostas = useSelector((state) => state.propostas);

	useEffect(() => {
		console.log(propostas)
	});

	useEffect(() => {
		dispatch(getPropostasAsync(),getTodosAsync());
	}, [dispatch]);

	return (
		<ul className='list-group'>
			{propostas.map((proposta) => (
				<PropostaItem
					id={proposta.id} 
					nome={proposta.nome} 
					completed={proposta.completed} 
					valorProposta={proposta.valorProposta}
				/>
			))}
		</ul>
	);
};

export default PropostaList;
