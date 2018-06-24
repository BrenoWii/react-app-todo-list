import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import TodoItem from "./components/TodoItem";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValues: []
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todoValues) {
    this.setState({ todoValues: [{ ...todoValues }] });
  }
  remoteTodo(id) {
    console.log("isso remove", id);
  }
  render() {
    console.log("state,index", this.state);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Form addTodo={this.addTodo} />
          <TodoItem todos={this.state.todoValues} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
