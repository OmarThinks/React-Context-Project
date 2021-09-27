import React,{useState} from 'react';


const AddProductForm = ({addProduct}) => {
    

    const [title,setTitle] = useState("Hey");


    const submitForm=(e)=>{
        e.preventDefault();
        addProduct();
    }

    return ( 
        <form onSubmit={submitForm}>
            <label>Product Name:</label>
            <input type="text" name="name" 
            value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }}
            required/>
            <input type="submit" value="Create a Product"/>
        </form>
     );
}
 
export default AddProductForm;
