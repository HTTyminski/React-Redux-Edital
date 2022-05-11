import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPropostaAsync } from '../redux/propostaSlice';
import { getTodosAsync } from '../redux/todoSlice';


const AddPropostaForm = () => {
	const [value, setValue] = useState('');
	const [valor, setValor] = useState('');
	const [todo, selectedTodo ] = useState([])

	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addPropostaAsync({
					nome: value,
					valorProposta: valor,
				}),
				getTodosAsync({
					title: todo
				})
			);
		}
	};
	
	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Nome</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Nome da proposta...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<label className='sr-only'>Valor limite por proposta</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Valor da proposta...'
				value={valor}
				onChange={(event) => setValor(event.target.value)}
			></input>

			<select name="Editais" className='form-control mb-2 mr-sm-2'>
				{todos.map((todo) => (
					<option key={todo.title} value={todo}>{todo.title}</option> 
				))}
			</select>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddPropostaForm;
