import React, {Component} from 'react';

export default class Todo extends Component{
    handleRemove(name){
        this.props.removeTodo(name);
    }
    render(){
        const todos = this.props.list.map( (item,idx) => {
            return <div className="todo" key={idx}>{item} <img onClick={() => this.handleRemove(item)} className="delete" src={process.env.PUBLIC_URL+'close.svg'} alt="close"/> </div>
        })
        return(
            <ul className="todo-list">
                {todos}
            </ul>
        );
    }
};
