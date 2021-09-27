import React, { Component } from 'react';

class NavBar extends Component {

    render() { 
        return ( 
          <navbar>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Login</li>
                <li>Logout</li>
              </ul>
          </navbar>
         );
    }
}
 
export default NavBar;

