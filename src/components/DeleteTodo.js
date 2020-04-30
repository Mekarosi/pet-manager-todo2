import React, { Component } from 'react';

class DeleteTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false,
    };
  }
  render() {
    return <div></div>;
  }
}

export default DeleteTodo;
