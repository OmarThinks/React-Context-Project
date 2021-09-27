import './App.css';
import { Component } from 'react';
import Main from './components/main';
import NavBar from './components/navbar';

import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

class App extends Component {
  state = {  }
  render() { 
      return(
        <div id="root_div">
          <ThemeContextProvider>
            <NavBar></NavBar>
            <Main></Main>
            <ThemeToggle/>
          </ThemeContextProvider>
        </div>        
     );
  }
}

export default App;
