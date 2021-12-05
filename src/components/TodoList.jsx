import React, { Component } from "react";
import Todos from "./Todos";

export default class TodoList extends Component {
  render() {
    const { deleteTodo, completeTodo } = this.props;
    return (
      <div>
        <ul className="todo-list">
          {this.props.todos.map((todos) => {
            return <Todos key={todos.id} todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
          })}
        </ul>
      </div>
    );
  }
}
