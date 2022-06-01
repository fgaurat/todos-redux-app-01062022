import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { Todo } from './core/Todo';
import { useEffect } from 'react';
import { TodoDAO } from './core/TodoDAO';

const dao = new TodoDAO()

function App() {

  return (
    <div className="container-fluid">
        <TodoList></TodoList>
    </div>
  );
}

export default App;
