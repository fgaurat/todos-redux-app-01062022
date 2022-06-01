import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from '../features/todos/todoSlice'
export default configureStore({
    reducer: {
        todoList:todoListReducer
    },
})