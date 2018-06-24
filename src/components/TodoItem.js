import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos
          ? todos.map(todo => (
              <div>
                <li>{todo.name}</li>
                <li>{todo.phone}</li>
                <li>{todo.email}</li>
                <li>{todo.description}</li>
              </div>
            ))
          : null}
      </ul>
    );
  }
}
