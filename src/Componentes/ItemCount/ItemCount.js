import { useState } from "react";

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

	const addToCart = () => {
		setCount(1);
		console.log("Agregado al carrito");
	};

	return { count, decrement, increment, addToCart };
};

export const ItemCount = () => {
	const { count, decrement, increment, addToCart } = useCount();

	return (
		<div>
			<div>
				<button onClick={decrement}>Restar</button>
				<span>{count}</span>
				<button onClick={increment}>Sumar</button>
			</div>
			<button onClick={addToCart}>Agregar al 🛒</button>
		</div>
	);
};