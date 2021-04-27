import { Dispatch, SetStateAction } from "react";
import { ITodo } from "../interfaces/todo.interface";
import { Todo } from "../utils/todo.util";

export class TodoHelper {
    /**
     * 
     * @param id            The todo id.
     * @param title         The todo title.
     * @param description   The todo description.
     * @returns 
     */
    static createTodo(id: number, title: string, description: string): Todo {
        return new Todo(id, title, description);
    }

    /**
     * 
     * @param id        The id of the todo to delete.
     * @param setTodos  The function to set the updated todo list.
     */
    static deleteTodo(id: number, setTodos: Dispatch<SetStateAction<ITodo[] | null>>): void {
        setTodos((preValue: ITodo[] | any) => (preValue?.filter((todo: ITodo) => todo.id !== id)));
    }
}