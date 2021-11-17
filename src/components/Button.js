import React from 'react';
import { Link } from 'react-router-dom'


const Button = ({ text, path }) => {
	return (
		<Link to={path}>
			<button className="bg-white uppercase border-none outline-none mt-5 px-10 py-5 md:px-12 md:py-6 rounded-full font-extrabold t
			racking-wide cursor-pointer shadow-lg text-primary hover:scale-105 transform transition-all">
				{text}
			</button>
		</Link>
	)
}

export default Button;