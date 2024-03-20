import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Logo } from './logo'
import { CartWidget } from './cartwidget'
import "./navbar.css";


export const Navbar = () => {
  return (
    <nav className='navcontainer'>
        <Link to="/"><Logo/></Link>

        <div className='contenedorItems'>
          <NavLink className='navitems' to="category/Fuerza">Fuerza</NavLink>
          <NavLink className='navitems' to="category/Aerobico" >Aerobico</NavLink>
          <NavLink className='navitems' to="category/Accesorio">Accesorios</NavLink>
        </div>

        <CartWidget/>
    </nav>
  );
};
