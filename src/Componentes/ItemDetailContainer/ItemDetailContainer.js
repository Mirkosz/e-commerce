import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { products } from "../../data/data";

export const ItemDetailContainer = () => {
    const { itemId } = useParams();
  
    const [MyProduct, setMyProduct] = useState({});
    const MyPromise = new Promise((resolve) =>{
      setTimeout(()=>{
        resolve(products);
      }, 500);
    });
  
    useEffect(() => {
      MyPromise.then((data) =>{
        setMyProduct(itemId ? data.find((produ) => produ.id === itemId) : data);
      });
    }, [itemId]);
 
    return (
    <div>
        <ItemDetail produ={MyProduct}/>
    </div>
  )
}
