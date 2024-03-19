import React from 'react'
import { Logo } from './logo'
import { CartWidget } from './cartwidget'
import "./navbar.css";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className='navcontainer'>
        <Link to="/"><Logo/></Link>

        <div className='contenedorItems'>
          <Link className='Items' to="category/Fuerza">Fuerza</Link>
          <Link className='Items' to="category/Aerobico" >Aerobico</Link>
          <Link className='Items' to="category/Accesorio">Accesorios</Link>
        </div>

        <CartWidget/>
    </nav>
  );
};
