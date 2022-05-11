import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import propostaReducer from './propostaSlice';

export default configureStore({
	reducer: {
		todos: todoReducer,
		propostas: propostaReducer,
	},
});
