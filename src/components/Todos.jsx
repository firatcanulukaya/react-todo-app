import React, { Component } from "react";

export default class Todos extends Component {
  onDeleteClick(id) {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  }

  onCompleteClick(id) {
    const { completeTodo } = this.props;
    completeTodo(id);
  }

  render() {
    const { todo, id } = this.props.todos;
    return (
      <div>
        <li className="todo-item" key={id}>
          <div className="first-item">

            {this.props.todos.isCompleted ? (
              <span className="todo-item-text" style={{ textDecoration: "line-through", color: "grey" }}>{todo}</span>

            ) : (
              <span className="todo-item-text">{todo}</span>
            )}
          </div>

          <div className="second-item">

            {this.props.todos.isCompleted ? (
              <button className="todo-item-button" onClick={this.onDeleteClick.bind(this, id)}>
                <i className="fas fa-times"></i>
              </button>
            ) : (
              <div>
                <button className="todo-item-button" onClick={this.onCompleteClick.bind(this, id)} >
                  <i className="fas fa-check"></i>
                </button>
                <button className="todo-item-button" onClick={this.onDeleteClick.bind(this, id)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            )}
          </div>
        </li>
      </div>
    );
  }
}
