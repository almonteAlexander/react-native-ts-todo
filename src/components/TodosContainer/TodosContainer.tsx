import React, { Dispatch, SetStateAction } from "react"
import { Todo } from "../Todo/Todo";
import { View, Text } from "react-native";
import { ITodo } from "../../interfaces/todo.interface";
import { styles } from "./TodosContainer.styles";

interface Props {
    todoList: ITodo[] | null;
    setTodos: Dispatch<SetStateAction<ITodo[] | null>>
}

export const TodosContainer: React.FC<Props> = ({ todoList, setTodos }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.counter}>
                {`${todoList?.length ? todoList.length : 0} todos`}
            </Text>

            {todoList?.map(todo => (
                <Todo todo={todo} setTodos={setTodos} key={todo.id} />
            ))}
        </View>
    );
}