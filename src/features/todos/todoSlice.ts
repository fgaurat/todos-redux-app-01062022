import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DAO } from '../../core/DAO'
import { Todo } from '../../core/Todo'
import { TodoDAO } from '../../core/TodoDAO'

const initialState = { todos: [] }

export const getTodosAsync = createAsyncThunk(
    'todos/getTodos', async () => {
        const dao: DAO = new TodoDAO();
        const todos: Todo[] = await dao.findAll()
        return todos
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
    extraReducers:{
        [getTodosAsync.fulfilled.type] : (state,action) =>{
            return {todos:action.payload}
        }
    }
})


export default todoSlice.reducer