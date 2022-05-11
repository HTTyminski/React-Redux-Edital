const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let todos = [
	{
		id: nanoid(),
		title: 'Edital 1',
		completed: true,
		valor: 1000,
	},
	{
		id: nanoid(),
		title: 'Edital 2',
		completed: false,
		valor: 2000,
	},
	{
		id: nanoid(),
		title: 'Edital 2',
		completed: false,
		valor: 7000,
	},
	{
		id: nanoid(),
		title: 'Edital 4',
		completed: false,
		valor: 1000,
	},
	{
		id: nanoid(),
		title: 'Edital 5',
		completed: false,
		valor: 1000,
	},
];

let propostas = [
	{
		id: nanoid(),
		nome:'Proposta 1',
		completed: false,
		valorProposta:500
	},
	{ 	
		id: nanoid(),
		nome:'Proposta 2',
		completed: false,
		valorProposta:1500
	},
	{   
		id: nanoid(),
		nome:'Proposta 3',
		completed: false,
		valorProposta:600
	}
]

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
	const todo = { 
		title: req.body.title, 
		id: nanoid(), 
		completed: false ,
		valor: req.body.valor,
	};
	todos.push(todo);
	return res.send(todo);
});

app.patch('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	const completed = Boolean(req.body.completed);
	if (index > -1) {
		todos[index].completed = completed;
	}
	return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	if (index > -1) {
		todos.splice(index, 1);
	}

	res.send(todos);
});

app.get('/propostas', (req, res) => res.send(propostas));

app.post('/propostas', (req, res) => {
	const proposta = { 
		id: nanoid(), 
		nome: req.body.title, 
		completed: false ,
		valorProposta: req.body.valorProposta,
	};
	propostas.push(proposta);
	return res.send(proposta);
});

app.patch('/propostas/:id', (req, res) => {
	const id = req.params.id;
	const index = propostas.findIndex((proposta) => proposta.id == id);
	const completed = Boolean(req.body.completed);
	if (index > -1) {
		propostas[index].completed = completed;
	}
	return res.send(propostas[index]);
});

app.delete('/propostas/:id', (req, res) => {
	const id = req.params.id;
	const index = propostas.findIndex((proposta) => proposta.id == id);
	if (index > -1) {
		propostas.splice(index, 1);
	}

	res.send(propostas);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
