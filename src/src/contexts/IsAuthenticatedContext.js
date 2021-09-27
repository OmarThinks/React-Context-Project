import {createContext, Component} from 'react';

export const IsAuthenticated = createContext();

class IsAuthenticatedProvider extends Component {
    state = { 
        isAuthenticated:false,
    };

    toggleAuth=()=>{
        this.setState({isLightTheme:!this.state.isLightTheme});
    }

    render() { 
        return ( 
        <IsAuthenticated.Provider value={
            {...this.state, toggleAuth:this.toggleAuth}}>
            {this.props.children}
        </IsAuthenticated.Provider> );
    }
}
 
export default IsAuthenticatedProvider;