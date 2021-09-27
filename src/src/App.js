import './App.css';
import { Component } from 'react';
import Main from './components/main';
import NavBar from './components/navbar';

import ThemeContextProvider from './contexts/ThemeContext';

class App extends Component {
  state = {  }
  render() { 
      return(
        <div id="root_div">
          <ThemeContextProvider>
            <NavBar></NavBar>
            <Main></Main>
          </ThemeContextProvider>
        </div>        
     );
  }
}

export default App;
