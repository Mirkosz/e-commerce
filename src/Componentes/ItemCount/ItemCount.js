import { useState } from "react";
import "./ItemCount.css"

export const useCount = () => {
	const [count, setCount] = useState(1);

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};
	const increment = () => {
		setCount(count + 1);
	};

	const CartAdd = () => {
		setCount(1);
		console.log("Agregado al carrito");
	};

	return { count, decrement, increment, CartAdd };
};

export const ItemCount = () => {
	const { count, decrement, increment, CartAdd } = useCount();

	return (
		<div>
			<div>
				<button className="cuenta" onClick={decrement}>-</button>
				<span>{count}</span>
				<button className="cuenta" onClick={increment}>+</button>
			</div>
			<button className="cuenta" onClick={CartAdd}>Agregar al carrito</button>
		</div>
	);
};