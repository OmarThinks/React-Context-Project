import './App.css';
import React, { Component } from 'react';
import Main from './components/main';
import NavBar from './components/navbar';



class App extends Component {
  state = {  }
  render() { 
      return(
        <div id="root_div">
          <NavBar></NavBar>
          <Main></Main>
        </div>        
     );
  }
}

export default App;
