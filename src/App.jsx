import React, { Component } from "react";
import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          todo: "Learn React",
          isCompleted: true,
        },
        {
          id: 2,
          todo: "Create Todo app",
          isCompleted: false,
        },
        {
          id: 3,
          todo: "And finish it",
          isCompleted: false,
        }
      ],
    };

    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter((todos) => todos.id !== id);
    this.setState({
      todos: todos,
    });
  }

  completeTodo(id) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    this.setState({
      todos: todos,
    });

  }

  addTodo(newTodo) {
    const todos = [...this.state.todos, newTodo];
    this.setState({
      todos: todos,
    });

  }

  render() {
    return (
      <div className="main-container">
        <h1 className="todo-header">Todo</h1>
        <h4 className="todo-done">{this.state.todos.filter((todo) => todo.isCompleted).length} task done out of {this.state.todos.length} </h4>
        <AddTodo addTodo={this.addTodo} />
        <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos} completeTodo={this.completeTodo} />
      </div>
    );
  }
}

export default App;