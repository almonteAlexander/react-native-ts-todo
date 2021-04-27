import { ITodo } from "../interfaces/todo.interface";

export class Todo implements ITodo{
    id: number;
    title: string;
    description: string;
    
    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
     }

    /**
     * 
     * @param newTitle The new title for the todo.
     */
    changeTitle(newTitle: string): void{
        this.title = newTitle;
    }

    /**
     * 
     * @param newDescription The new description for the todo.
     */
    changeDescription(newDescription: string): void{
        this.description = newDescription;
    }
}