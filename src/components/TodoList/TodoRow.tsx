import React from 'react'
import { Todo } from '../../core/Todo'
import { AppDispatch } from '../../app/store'
import { useDispatch } from 'react-redux'

import { deleteTodoAsync } from '../../features/todos/todoSlice'


interface TodoRowProps{
    todo:Todo
}

function TodoRow({todo}:TodoRowProps) {
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <tr >
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td>{todo.completed}</td>
    <td><button className="btn btn-danger" onClick = {e => dispatch(deleteTodoAsync(todo.id!))}>delete</button></td>
</tr>
  )
}

export default TodoRow