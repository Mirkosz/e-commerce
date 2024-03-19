import React, { useState, useEffect }from 'react'
import "./ItemListcontainer.css"
import { useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList';
import { products } from '../../data/data';

export const ItemListcontainer = (props) => {
  const { categoryId } = useParams();
  console.log(categoryId)

  const [MyProducts, setMyProducts] = useState([]);
  const MyPromise = new Promise((resolve) =>{
    setTimeout(()=>{
      resolve(products);
    }, 1500);
  });

  useEffect(() => {
    MyPromise.then((data) =>{
      setMyProducts(categoryId ? data.filter((produ) => produ.category === categoryId) : data);
    });
  }, [categoryId]);

  console.log(MyProducts);
  
  
  return (
    <div className='contenedor'>
      <ItemList products={MyProducts}/>
    </div>
  );
};
