import { Component, Fragment, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return <button onClick={toggleTheme}>Toogle the Theme</button>;
}
 
export default ThemeToggle;