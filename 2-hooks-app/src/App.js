import './App.css';
import { Component } from 'react';
import ProductsList from './components/ProductsList';


class App extends Component {
  state = {  }
  render() { 
      return(
        <div id="root_div">
          <ProductsList />
        </div>        
     );
  }
}

export default App;
