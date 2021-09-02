import React, { Component } from 'react';

class NavBar extends Component {
    state = { navleft:["Home", "Products", "My Cart"] };
    render() { 
        return ( 
            <nav style={{background:"grey"}}>
                <ul>
                    {this.state.navleft.map((element)=>{
                        return(
                            <li style={{
                                background:"lightgrey",
                                color:"darkgreen",
                                "border-color":"black"
                            }}>{element}</li>
                        );
                    })}
                    
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;

