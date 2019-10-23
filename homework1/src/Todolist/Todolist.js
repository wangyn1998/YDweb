import React, { Component } from 'react'
import Todoing from './Todoing'
import Todoinput from './Todoinput'
import "./todo.css"

var storage = window.localStorage;
var work = [];
var fnsh = [];
for(var i = 0;i<storage.length;i++){
    var key = storage.key(i);
    var sign = key.slice(0,4);
    if(sign == "work"){
        work.push(storage.getItem(key));
    }
    else if(sign =="fnsh"){
        fnsh.push(storage.getItem(key));
    }
}
export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:work,
            finish:fnsh
        }

    }
    addItem = (data)=>{
        this.setState((state,props)=>{
            let todo=[...state.todo,data];
            for(var i =0;i <todo.length;i++){
                storage.setItem("work" + i,todo[i]);
            }
            return{
                todo:todo
            } 
    
        })
        
    }
    deltodoItem = (idx)=>{
        this.setState((state,props)=>{
            let todo = [...state.todo];
            let finish = [...state.finish];
            todo.splice(idx,1);
            storage.clear();
            for(var i =0;i <finish.length;i++){
                storage.setItem("fnsh" + i,finish[i]);
            }
            for(var i =0;i <todo.length;i++){
                storage.setItem("work" + i,todo[i]);
            }
            return {
                todo: todo,
                finish:finish
            }
        })
    }
    delfinishItem = (idx)=>{
        this.setState((state,props)=>{
            let todo= [...state.todo];
            let finish = [...state.finish];
            finish.splice(idx,1);
            storage.clear();
            for(var i =0;i <finish.length;i++){
                storage.setItem("fnsh" + i,finish[i]);
            }
            for(var i =0;i <todo.length;i++){
                storage.setItem("work" + i,todo[i]);
            }
            return {
                todo: todo,
                finish:finish
            }
        })
    }
    finishedItem = (idx)=>{
        this.setState((state,props)=>{
            let todo= [...state.todo];
            let finish = [...state.finish,todo.slice(idx,idx+1)];
            todo.splice(idx,1);
            storage.clear();
            for(var i =0;i <finish.length;i++){
                storage.setItem("fnsh" + i,finish[i]);
            }
            for(var i =0;i <todo.length;i++){
                storage.setItem("work" + i,todo[i]);
            }
            return {
                todo: todo,
                finish:finish
            }
        })
        
    }
    unfinishItem = (idx)=>{
        this.setState((state,props)=>{
            let finish = [...state.finish];
            let todo= [...this.state.todo,finish.slice(idx,idx+1)];
            finish.splice(idx,1);
            storage.clear();
            for(var i =0;i <finish.length;i++){
                storage.setItem("fnsh" + i,finish[i]);
            }
            for(var i =0;i <todo.length;i++){
                storage.setItem("work" + i,todo[i]);
            }
            return {
                todo: todo,
                finish:finish
            }
        })
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing deltodo={this.deltodoItem} delfinish={this.delfinishItem} todo={this.state.todo} finished={this.finishedItem} finish={this.state.finish} unfinish={this.unfinishItem}/>
            </div>
        )
    }
}
