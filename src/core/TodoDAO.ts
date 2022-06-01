import { DAO } from "./DAO";
import { Todo } from "./Todo";



export class TodoDAO implements DAO{
    
    
    async findAll(): Promise<Todo[]> {
        const url = process.env.REACT_APP_TODOS_URL
        return fetch(url!).then(resp => resp.json())
    }


}