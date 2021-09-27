import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';




class Main extends Component {
    static contextType = ThemeContext;
    render() { 
        console.log(this.context);
        const {isLightTheme, light, dark}=this.context;
        const theme = isLightTheme ? light : dark;

        return ( 
        <main style={{background:theme.bg, color: theme.syntax}}>
            <ul>
                <li>First element</li>
                <li>Second element</li>
                <li>Third element</li>
            </ul>

        </main> );
    }
}
 
export default Main;