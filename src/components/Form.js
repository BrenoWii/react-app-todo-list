import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    const todos = {
      ...this.state.todos,
      [e.target.name]: e.target.value
    };
    this.setState({ todos });
  }
  addTodo(todo) {
    this.props.addTodo(todo);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <label for="Nome">Nome:</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </div>
        <div>
          <label for="phone">Telefone:</label>
          <input type="phone" name="phone" onChange={this.handleChange} />
        </div>
        <div>
          <label for="email">E-mail:</label>
          <input type="email" name="email" onChange={this.handleChange} />
        </div>
        <div>
          <label for="msg">Descrição:</label>
          <textarea
            type="text"
            name="description"
            onChange={this.handleChange}
          />
        </div>
        <button
          onClick={() => {
            this.addTodo(this.state.todos);
          }}
        >
          Salvar
        </button>
      </div>
    );
  }
}
export default Form;
