import React,{useState} from 'react';


const AddProductForm = () => {
    

    const [title,setTitle] = useState("Hey");


    return ( 
        <form>
            <label>Product Name:</label>
            <input type="text" name="name" 
            value={title} onChange={(e)=>{
                console.log(e.target.value);
            }}
            required/>
            <input type="submit" value="Create a Product"/>
        </form>
     );
}
 
export default AddProductForm;
