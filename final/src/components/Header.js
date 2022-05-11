import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
		 <div>
            <Link to="/">Home</Link>
            <Link to="/Edital">/Edital</Link>
            <Link to="/Propostas">Propostas</Link>
         </div>
		</div>
	);
};

export default Header;
