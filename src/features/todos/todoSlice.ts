import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DAO } from '../../core/DAO'
import { Todo } from '../../core/Todo'
import { TodoDAO } from '../../core/TodoDAO'

const initialState = { todos: [] }

export const saveTodoAsync = createAsyncThunk('todos/saveTodo', async (todo:Todo,thunkAPI) => { 
    const dao: DAO = new TodoDAO();
    const savedTodo = await dao.save(todo)
    thunkAPI.dispatch(getTodosAsync())
})







export const getTodosAsync = createAsyncThunk(
    'todos/getTodos', async () => {
        const dao: DAO = new TodoDAO();
        const todos: Todo[] = await dao.findAll()
        return todos
    }
)

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodo', async (id: number, thunkAPI) => {
        const dao: DAO = new TodoDAO();
        await dao.delete(id);
        thunkAPI.dispatch(getTodosAsync())
    });

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getTodosAsync.fulfilled.type]: (state, action) => {
            return { todos: action.payload }
        },
        // [deleteTodoAsync.fulfilled.type] : (state,action) =>{
        //     return{
        //         todos:state.todos.filter( (todo:Todo) => todo.id!== action.payload.id )
        //     }
        // }

    }
})


export default todoSlice.reducer