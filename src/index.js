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
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todoValues) {
    this.setState({
      todoValues: [...this.state.todoValues, { ...todoValues }]
    });
  }
  todoToForm(index) {
    this.setState({
      todoUpdate: { ...this.state.todoValues.splice(index,1)}
    });
  }
  removeTodo(id) {
    this.setState({
      todoValues:[this.state.todoValues.find((todo,index)=>index !==id)]
    })
  }
  render() {
    console.log("state,index", this.state);
    return (
      <div className="App">
        <div className="container">
          <Header title={'Essa vai para voce que achhou que eu estava aqui sofrendo'} />
          <Form addTodo={this.addTodo}
            todoToUpdate={this.state.todoToForm}


           />
          <TodoItem 
            todos={this.state.todoValues}
            remove={this.removeTodo}
          
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
