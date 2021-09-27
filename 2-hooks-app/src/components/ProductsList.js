import React,{useState} from 'react';


const ProductsList = () => {
    
    const [products,setProducts]= useState(
        [
            {name:"CPU", id: 1},
            {name:"Labtop", id: 2},
            {name:"Mobile", id: 3},
        ]
    );

    return ( 
    <div className="prodcuts-list">
        <ul>
            {products.map(product=>{
                return(<li key={product.id}>{product.name}</li>);
            })}
        </ul>
    </div> );
}
 
export default ProductsList;