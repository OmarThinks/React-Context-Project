import './App.css';
import { Component } from 'react';
import Main from './components/main';
import NavBar from './components/navbar';

import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import  AuthContextProvider  from './contexts/AuthContext';

class App extends Component {
  state = {  }
  render() { 
      return(
        <div id="root_div">
          <ThemeContextProvider>
            <AuthContextProvider>
              <NavBar></NavBar>
              <Main></Main>
              <ThemeToggle/>
            </AuthContextProvider>
          </ThemeContextProvider>
        </div>        
     );
  }
}

export default App;
