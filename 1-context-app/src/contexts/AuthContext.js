
/*
class AuthContextProvider extends Component {
    state = { 
        isAuthenticated:false,
    };

    toggleAuth=()=>{
        this.setState({isAuthenticated:!this.state.isAuthenticated});
    }

    render() { 
        return ( 
        <AuthContext.Provider value={
            {...this.state, toggleAuth:this.toggleAuth}}>
            {this.props.children}
        </AuthContext.Provider> );
    }
}
*/


import {createContext, useState} from 'react';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    
    const [isAuthenticatedState, setIsAuthenticatedState] = useState({isAuthenticated:false});

    const toggleAuth=()=>{
        setIsAuthenticatedState({isAuthenticated:!isAuthenticatedState.isAuthenticated});
    }

    return ( 
    <AuthContext.Provider value={{...isAuthenticatedState, toggleAuth}}>
        {props.children}
    </AuthContext.Provider> );
}
 
export default AuthContextProvider;



