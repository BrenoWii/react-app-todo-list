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
      <div className="form-inline">
        <div className="form-group mb-2">
          <label for="Nome">Nome:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div class="form-group  mb-2">
          <label for="phone">Telefone:</label>
          <input
            className="form-control"
            type="phone"
            name="phone"
            onChange={this.handleChange}
          />
        </div>
        <div class="form-group  mb-2">
          <label for="email">E-mail:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div class="form-group  mb-2">
          <label for="msg">Descrição:</label>
          <textarea
            className="form-control"
            type="text"
            name="description"
            onChange={this.handleChange}
          />
        </div>
        <button
          style={{ "margin-top": "30px" }}
          className="btn btn-primary"
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
