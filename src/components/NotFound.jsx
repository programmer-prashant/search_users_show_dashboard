import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>Opps! 404 Error! Page not found</h1>
			<Link to='/'>
				<button className='btn bg-dark text-white'>Go to Home</button>
			</Link>
		</div>
	);
};

export default NotFound;
