import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Main extends Component {
    static contextType = ThemeContext;
    render() { 
        

        return ( 
        
        <ThemeContext.Consumer>{(context)=>{
        console.log(context);
      
        const {isLightTheme, light, dark}=context;
        const theme = isLightTheme ? light : dark;
            return(
        <main style={{background:theme.ui, color: theme.syntax}}>
            <ul>
                <li style={{background:theme.bg}}>First element</li>
                <li style={{background:theme.bg}}>Second element</li>
                <li style={{background:theme.bg}}>Third element</li>
            </ul>

        </main> 

            );
        }}

       
        </ThemeContext.Consumer>
        );
    }
}
 
export default Main;