import React, { Dispatch, SetStateAction } from "react"
import { View, Text, Platform, Button, TouchableHighlight } from "react-native";
import { TodoHelper } from "../../helpers/todo.helper";
import { ITodo } from "../../interfaces/todo.interface";
import { styles } from "./Todo.styles";

interface Props {
    todo: ITodo;
    setTodos: Dispatch<SetStateAction<ITodo[] | null>>;
}

export const Todo: React.FC<Props> = ({ todo, setTodos }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{todo?.title}</Text>
            <Text style={styles.description}>{todo?.description}</Text>

            <TouchableHighlight style={styles.deleteButton}>
                <Button 
                color={Platform.OS === "ios" ? "white" : ""} 
                title={"Delete"} 
                onPress={(): void => TodoHelper.deleteTodo(todo.id, setTodos)} />
            </TouchableHighlight>
        </View>
    );
}