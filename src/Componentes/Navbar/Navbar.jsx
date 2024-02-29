import React from 'react'
import { Logo } from './logo'
import { CartWidget } from './cartwidget'
import "./navbar.css";


export const Navbar = () => {
  return (
    <nav className='navcontainer'>
        <a href=''><Logo/></a>
        <div className='contenedorItems'>
          <div className='Items'><a href="">Productos</a></div>
          <div className='Items'><a href="">Nosotros</a></div>
          <div className='Items'><a href="">Contacto</a></div>    
        </div>
        <CartWidget/>
    </nav>
  )
}
