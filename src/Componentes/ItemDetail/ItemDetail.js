import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({ prod }) => {
	return (
		<div>
			<article className='Card'>
                    <header className='header'>
                        <h2 className='titleItem'></h2>
                    </header>
                <section>
                    <p>Categoria:  </p>
                    <p>Descripcion: </p>
                    <p className='info'>Precio: $ </p>
                    <p className='info'>Stock disponible:</p>   
                </section>
                <footer className='InfoItem'>
                    <ItemCount/>
                </footer>
            </article>  
		</div>
	);
};