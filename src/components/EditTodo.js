import React, { Component } from 'react';

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_startdate: '',
      todo_completeddate: '',
      todo_completed: false,
    };
  }
  render() {
    return (
      <div>
        <p>Welcome to Edit Todo Page</p>
      </div>
    );
  }
}

export default EditTodo;
