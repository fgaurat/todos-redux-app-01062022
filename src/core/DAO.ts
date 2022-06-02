import { Todo } from "./Todo"

export interface DAO{
    findAll():Promise<any[]>
    delete(id:number):Promise<void>
    save(todo:Todo):Promise<Todo>
}