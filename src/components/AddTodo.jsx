import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    todo: "",
    id: 4,
  };

  onTodoChange(e) {
    this.setState({ todo: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { addTodo } = this.props;
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
    const newTodo = {
      todo: this.state.todo,
      id: this.state.id,
      iscompleted: false,
    };
    addTodo(newTodo);
    document.getElementById("form").reset();
  }

  render() {
    return (
      <div>
        <form className="todo-form" id="form" onSubmit={this.onFormSubmit.bind(this)}>
          <input required placeholder="type..." type="text" className="todo-input" onChange={this.onTodoChange.bind(this)} />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}
