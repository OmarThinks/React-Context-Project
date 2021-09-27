import React,{useState} from 'react';


const AddProductForm = () => {
    
    return ( 
        <form>
            <label>Product Name:</label>
            <input type="text" name="name"/>
            <input type="submit" value="Create a Product"/>
        </form>
     );
}
 
export default AddProductForm;
