import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { Todo } from './core/Todo';
import { useEffect } from 'react';
import { TodoDAO } from './core/TodoDAO';
import TodoForm from './components/TodoForm/TodoForm';

const dao = new TodoDAO()

function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col"><TodoList></TodoList></div>
        <div className="col"><TodoForm></TodoForm></div>
      </div>
        
    </div>
  );
}

export default App;
