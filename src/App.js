import React, { Component } from 'react';
import Todo from './component/Todo';
import Input from './component/Input';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  handleEnter(event){
    if(event.keyCode === 13){
      this.setState({
        todos: [...this.state.todos, this.state.input],
        input: ''
      });
    }
  }
  removeTodo(name){
    this.setState({
      todos: this.state.todos.filter(el => el !== name)
    })
  }
  render() {
    return (
      <div className="App">
        <Input value={this.state.input}  handleChange={this.handleChange} handleEnter={this.handleEnter}/>
        <Todo list={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
