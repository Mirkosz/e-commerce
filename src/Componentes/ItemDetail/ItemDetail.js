import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import "./ItemDetail.css"


export const ItemDetail = ({  }) => {
	return (
		<div className='containerItem'>
			<article className='Card'>
                    <header className='header'>
                        <h2 className='titleItem'>ITEM</h2>
                    </header>
                <section>
                    <p>Categoria:  </p>
                    <p>Descripcion: </p>
                    <p >Precio: $ </p>
                    <p >Stock disponible:</p>   
                </section>
                <footer className='InfoItem'>
                    <ItemCount/>
                </footer>
            </article>  
		</div>
	);
};