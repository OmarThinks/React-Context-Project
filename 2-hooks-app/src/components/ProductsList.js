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
            <li>CPU</li>
            <li>Labtop</li>
        </ul>
    </div> );
}
 
export default ProductsList;