import React,{useState} from 'react';
import { v4 as uuid } from 'uuid';
import AddProductForm from './AddProductForm';

const ProductsList = () => {
    
    const [products,setProducts]= useState(
        [
            {name:"CPU",    id: 1},
            {name:"Labtop", id: 2},
            {name:"Mobile", id: 3},
        ]
    );
    
    const addProduct=()=>{
        setProducts([...products,{name:"New Product", id:uuid()}])
    }

    return ( 
    <div className="prodcuts-list">
        <ul>
            {products.map(product=>{
                return(<li key={product.id}>{product.name}</li>);
            })}
        </ul>
        <AddProductForm />
    </div> );
}
 
export default ProductsList;