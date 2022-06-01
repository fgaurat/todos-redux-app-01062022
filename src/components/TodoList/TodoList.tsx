import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { Todo } from '../../core/Todo'
import { getTodosAsync } from '../../features/todos/todoSlice'
import TodoRow from './TodoRow'


function TodoList() {

    const todos:Todo[] = useSelector( (state:any) => state.todoList.todos)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTodosAsync())
    }, [])
    
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