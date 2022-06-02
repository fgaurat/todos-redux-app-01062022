import { json } from "stream/consumers";
import { DAO } from "./DAO";
import { Todo } from "./Todo";



export class TodoDAO implements DAO{
    
    async save(todo: Todo): Promise<Todo> {
        const url = process.env.REACT_APP_TODOS_URL
        return fetch(url!,{
            method:'POST',
            headers:{
            'Content-type':'application/json'
            },
            body:JSON.stringify(todo)
        }).then(r => r.json())
    }
    
    async findAll(): Promise<Todo[]> {
        const url = process.env.REACT_APP_TODOS_URL
        return fetch(url!).then(resp => resp.json())
    }

    async delete(id:number):Promise<void>{
        const url = `${process.env.REACT_APP_TODOS_URL}/${id}`
        return fetch(url!,{method:'DELETE'}).then()
    }

}