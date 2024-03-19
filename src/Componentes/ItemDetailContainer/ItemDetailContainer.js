import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { products } from "../../data/data";

export const ItemDetailContainer = () => {
    const {ItemId} = useParams();
    console.log(ItemId)

    const [MyProduct, setMyProduct] = useState({});
    const MyPromise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products);
        }, 1500);
    });
    useEffect(() => {
        MyPromise.then((data) => {
            setMyProduct(data.find((prod) => prod.id === ItemId));
        });
    }, [ItemId])
 
 
    return (
    <div>
        <ItemDetail prod={MyProduct}/>
    </div>
  )
}
