import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Pet Manager's Todo</h1>

        <Route path='/' exact component={TodoList} />
        <Route path='/edit/:id' component={EditTodo} />
        <Route path='/create' component={CreateTodo} />
        <Route path='/delete/:id' component={DeleteTodo} />
      </div>
    </Router>
  );
}

export default App;
