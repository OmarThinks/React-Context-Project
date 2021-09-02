import React, { Component } from 'react';




class Main extends Component {
    state = { 
        todos:[
            "Wake Up", 
            "Brush Your teeth",
            "Wash your Face"
        ] 
}
    render() { 
        return ( 
        <main>
            <ul>
                {this.state.todos.map((todo)=>{
                    return(<li 
                        style={{
                            background:"lightgrey",
                            color:"darkgreen"
                        }}>{todo}</li>)
                })}
            </ul>
        </main> );
    }
}
 
export default Main;