import { Component, Fragment } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


class ThemeToggle extends Component {
    static contextType = ThemeContext;


    render() {
        console.log(this.context);
        const {toggleTheme}=this.context;
        
        return <button onClick={toggleTheme}>Toogle the Theme</button>;
    }
}
 
export default ThemeToggle;