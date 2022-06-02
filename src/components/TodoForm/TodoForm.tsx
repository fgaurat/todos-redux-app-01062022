import React from 'react'
import { FormEvent } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { saveTodoAsync } from '../../features/todos/todoSlice'

function TodoForm() {

    const [title,setTitle] = useState("")
    const [completed,setCompleted] = useState(false)
    const dispatch = useDispatch<AppDispatch>();


    const onSubmit = (event:FormEvent) =>{
        event.preventDefault()
        dispatch(saveTodoAsync({title,completed}))
    }

    return (

        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="todoTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="todoTitle" value={title} onChange={e=> setTitle(e.target.value)}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" id="todoChecked" className="form-check-input" checked={completed} onChange={e=> setCompleted(e.target.checked)}/>
                <label className="form-check-label" htmlFor="todoChecked">Completed</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default TodoForm