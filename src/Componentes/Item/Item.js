import React from 'react'
import { ItemCount } from "../ItemCount/ItemCount"

export const Item = ({ producto }) => {
	return (
		<div className="card">
			<h3 className="card--title">{producto.title}</h3>
			
			<div className="card--price">$ {producto.price}</div>
			<ItemCount stock={producto.stock} /> 
			<button className="card--more">Ver Mas...</button>
		</div>
	);
}; 