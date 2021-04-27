import React, { useState } from "react";
import { ITodo } from "./src/interfaces/todo.interface";
import { Header } from "./src/components/header/Header";
import { TodosForm } from "./src/components/TodosForm/TodosForm";
import { TodosContainer } from "./src/components/TodosContainer/TodosContainer";
import { TodoHelper } from "./src/helpers/todo.helper";

const App: React.FC = () => {

  const [ todos, setTodos ] = useState<ITodo[] | any>([]);

  return (
    <>
    <Header />
    <TodosForm setTodos={setTodos}/>
    <TodosContainer todoList={todos} setTodos={setTodos} />
    </>
  );
}

export default App;