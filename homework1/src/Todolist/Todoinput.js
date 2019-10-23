  
import React, { Component } from 'react' 
export default class Todoinput extends Component {
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }

    render() {
        return (
            <div>
                <p>ToDoList<span><input onKeyDown={this.handleInput} type="text"  className="int"/></span></p>
            </div>
        )
    }
}