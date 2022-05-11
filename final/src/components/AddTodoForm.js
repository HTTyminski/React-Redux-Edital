import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';
import { getTodosAsync } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const [valor, setValor] = useState('');
	const [todo, selectTodo ] = useState([])

	const dispatch = useDispatch();
	

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
					valor: valor,
				}),
				getTodosAsync({
					title: todo
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<label className='sr-only'>Valor limite por proposta</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={valor}
				onChange={(event) => setValor(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
