import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class NavBar extends Component {
    static contextType = ThemeContext;
    /*
        This climbs up the component tree, to find the first time 
        there is a provider for this context
    */
    render() {
        console.log(this.context);
        const {isLightTheme, light, dark}=this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
          <nav style={{background:theme.bg, color: theme.syntax}}>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Login</li>
                <li>Logout</li>
              </ul>
          </nav>
         );
    }
}
 
export default NavBar;

