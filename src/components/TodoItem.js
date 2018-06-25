import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { todos } = this.props;

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr>
              <th scope="row">#</th>
              <td>{todo.name}</td>
              <td>{todo.email}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
