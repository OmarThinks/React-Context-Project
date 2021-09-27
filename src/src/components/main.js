import React, { Component, Fragment } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Main extends Component {
    static contextType = ThemeContext;
    render() { 
        return ( 
        <AuthContext.Consumer>{(authContext)=>{
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
        </main> );}}
        </ThemeContext.Consumer>);}}
        </AuthContext.Consumer>);
    }
}
 
export default Main;