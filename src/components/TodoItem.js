import React, { Component } from "react";

export default class TodoItem extends Component {
  handleUpdate = (index) => () => {
    console.log("isso atualiza");
  };
  handleExclude = (index)  => ()=>{
    this.props.remove(index)
  };

  render() {
    console.log("isso e a props",this.props);
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
        {todos[0]  ? 
        <div>
          {todos.map((todo, index) => (
            <tr>
              <td>
                <button onClick={this.handleUpdate(index)}>alterar </button>
                <button onClick={this.handleExclude(index)}>excluir </button>
              </td>
              <td>{todo.name}</td>
              <td>{todo.email}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
          </div>
          : 'nao existem tarefas'}
          

        </tbody>
      </table>
    );
  }
}
