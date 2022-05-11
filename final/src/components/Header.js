import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
	return (
		
		<div className='container bg-white p-4 mt-2' style={{ width: '100%',textAlign: 'center'}}>
	
            <Link 
				to="/"  
				style={{ 
					color: '#fff',
					backgroundColor: '#007bff',
					borderColor: '#007bff',
					padding: '0.5rem',
					borderRadius: '4px',
					minWidth: '400px',
					marginLeft: '30px',
					marginRight: '30px',
				}}>
				Home
			</Link>
            <Link 
				to="/Edital" 

				style={{ 
					color: '#fff',
					backgroundColor: '#007bff',
					borderColor: '#007bff',
					padding: '0.5rem',
					borderRadius: '4px',
					minWidth: '100px',
					marginLeft: '30px',
					marginRight: '30px',
				}}>
				Editais
			</Link>
            <Link 
				to="/Propostas" 

				style={{ 
					color: '#fff',
					backgroundColor: '#007bff',
					borderColor: '#007bff',
					padding: '0.5rem',
					borderRadius: '4px',
					minWidth: '100px',
					marginLeft: '30px',
					marginRight: '30px',
				}}>
				Propostas
			</Link>
         
		</div>
	);
};

export default Header;
