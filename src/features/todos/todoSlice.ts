import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todos: [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    }]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
})


export default todoSlice.reducer