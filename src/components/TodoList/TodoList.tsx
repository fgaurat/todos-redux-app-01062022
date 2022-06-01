import React from 'react'
import { Todo } from '../../core/Todo'
import TodoRow from './TodoRow'

interface TodoListProps{
    todos:Todo[]
}


function TodoList({todos}:TodoListProps) {

  return (
    <>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>completed</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {todos.map( (todo:Todo) =>
                    <TodoRow key={todo.id} todo={todo}/>
                )}

            </tbody>
        </table>
    </>
  )
}

export default TodoList