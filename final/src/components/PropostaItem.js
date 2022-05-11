import React from 'react';
import { useDispatch } from 'react-redux';
import {  toggleCompleteAsync, deletePropostaAsync } from '../redux/propostaSlice';

const PropostaItem = ({ id, nome, completed,valorProposta, title }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed,valorProposta }));
	};

	const handleDeleteClick = () => {
		dispatch(deletePropostaAsync({ id }));
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onClick={handleCheckboxClick}
					></input>
					{nome} | {valorProposta}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					Remover
				</button>
			</div>
		</li>
	);
};

export default PropostaItem;
