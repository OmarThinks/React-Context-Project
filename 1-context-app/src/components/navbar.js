import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
/*
class NavBar extends Component {
    static contextType = ThemeContext;
    //This climbs up the component tree, to find the first time 
    //there is a provider for this context
    
    render() {

        return ( 
          
         );
    }
}
*/

const NavBar = () => {
    const context =useContext(ThemeContext);
    console.log(context);
    const {isLightTheme, light, dark}=context;
    const theme = isLightTheme ? light : dark;
    return ( <nav style={{background:theme.ui, color: theme.syntax}}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Login</li>
          <li>Logout</li>
        </ul>
    </nav> );
}
 
export default NavBar;


