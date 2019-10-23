
import React, { Component } from 'react'
export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        var {finish} = this.props;
        return (
            <div>
                <p>正在进行<span>{todo.length}</span></p>
                <ul>
                    {
                        todo.map((item,idx)=>
                            <li key={idx} className="add"  >
                                <input type="checkbox" onClick={()=>this.props.finished(idx)}/>
                                {item}<button onClick={()=>this.props.deltodo(idx)} className="del" >del</button>                                  
                            </li>
                        )
                    }
                </ul>

                <p>已经完成<span>{finish.length}</span></p>
                <ul>
                    {
                        finish.map((item,idx)=>
                            <li key={idx} className="add"  >
                                <input type="checkbox" onClick={()=>this.props.unfinish(idx)}/>
                                {item}<button onClick={()=>this.props.delfinish(idx)} className="del" >del</button>                                  
                            </li>
                        )
                    }
                </ul>
               
            </div>
            
            
        )
    }
}