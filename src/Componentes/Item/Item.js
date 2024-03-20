import React from 'react'
import { ItemCount } from "../ItemCount/ItemCount"
import "./Item.css"

export const Item = ({ producto }) => {
	return (
		<div className="card">
			<h3 className="title">{producto.title}</h3>
			
			<div className="price">
				$ {producto.price}
			</div>

			<ItemCount className="stock" stock={producto.stock} /> 

			<button className="info">Ver Más...</button>
		</div>
	);
}; 