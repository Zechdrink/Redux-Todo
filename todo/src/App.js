import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    
  }

  render() {
    return (
      <div className="App">
       <h1>{this.props.title}</h1>
       <TodoForm/>
       <TodoList todos = {this.state.input}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { title: state.title }
}

export default connect(mapStateToProps)(App);
