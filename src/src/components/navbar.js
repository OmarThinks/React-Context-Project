import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>My Cart</li>
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;

