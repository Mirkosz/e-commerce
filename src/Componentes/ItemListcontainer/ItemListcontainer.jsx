import React, { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList';
import { products } from '../../data/data';
import "./ItemListcontainer.css"

export const ItemListcontainer = (props) => {
  const { categoryId } = useParams();

  const [MyProducts, setMyProducts] = useState([]);
  const MyPromise = new Promise((resolve) =>{
    setTimeout(()=>{
      resolve(products);
    }, 500);
  });

  useEffect(() => {
    MyPromise.then((data) =>{
      setMyProducts(categoryId ? data.filter((produ) => produ.category === categoryId) : data);
    });
  }, [categoryId]);
  
  
  return (
    <div className='contenedor'>
      <ItemList products={MyProducts}/>
    </div>
  );
};
