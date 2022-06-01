import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from '../../core/Todo'
import TodoRow from './TodoRow'


function TodoList() {

    const todos:Todo[] = useSelector( (state:any) => state.todoList.todos)
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