import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const getPropostasAsync = createAsyncThunk(
	'propostas/getPropostasAsync',
	async () => {
		const resp = await fetch('http://localhost:7000/propostas');
		if (resp.ok) {
			const propostas = await resp.json();
			return { propostas };
		}
	}
);

export const addPropostaAsync = createAsyncThunk(
	'propostas/addPropostaAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:7000/propostas', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
				nome: payload.nome,
				valorProposta: payload.valorProposta 
			}),
		});

		if (resp.ok) {
			const proposta = await resp.json();
			return { proposta };
		}
	}
);

export const toggleCompleteAsync = createAsyncThunk(
	'propostas/completePropostaAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:7000/propostas/${payload.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: payload.completed }),
		});

		if (resp.ok) {
			const proposta = await resp.json();
			return { proposta };
		}
	}
);

export const deletePropostaAsync = createAsyncThunk(
	'propostas/deletePropostaAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:7000/propostas/${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
		}
	}
);

export const propostaSlice = createSlice({
	name: 'propostas',
	initialState: [],
	reducers: {
		addProposta: (state, action) => {
			const proposta = {
				id: nanoid(),
				nome: action.payload.nome,
				completed: false,
                valorProposta:action.payload.valorProposta
			};
			state.push(proposta);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((proposta) => proposta.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
		deleteProposta: (state, action) => {
			return state.filter((proposta) => proposta.id !== action.payload.id);
		},
	},
	extraReducers: {
		[getPropostasAsync.fulfilled]: (state, action) => {
			return action.payload.propostas;
		},
		[addPropostaAsync.fulfilled]: (state, action) => {
			state.push(action.payload.propostas);
		},
		[toggleCompleteAsync.fulfilled]: (state, action) => {
			const index = state.findIndex(
				(proposta) => proposta.id === action.payload.proposta.id
			);
			state[index].completed = action.payload.proposta.completed;
		},
		[deletePropostaAsync.fulfilled]: (state, action) => {
			return state.filter((proposta) => proposta.id !== action.payload.id);
		},
	},
});

export const { addProposta, toggleComplete, deleteProposta } = propostaSlice.actions;

export default propostaSlice.reducer;
