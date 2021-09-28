import React, { Component, Fragment, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Main = () => {
    const authContext = useContext(AuthContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    
    const theme = isLightTheme ? light : dark;    
    
    return( 
        <main 
            style={{background:theme.ui, color: theme.syntax}}
            onClick={authContext.toggleAuth}
        >
        {authContext.isAuthenticated?"The user is Authentiated":"The user is not Authenticated"}
            <ul>
                <li style={{background:theme.bg}}>First element</li>
                <li style={{background:theme.bg}}>Second element</li>
                <li style={{background:theme.bg}}>Third element</li>
            </ul>
        </main> );
}

export default Main;