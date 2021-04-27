import React, { Dispatch, SetStateAction, useState } from "react"
import { Button, Platform, Text, TextInput, TouchableHighlight, View } from "react-native";
import { TodoHelper } from "../../helpers/todo.helper";
import { ITodo } from "../../interfaces/todo.interface";
import { styles } from "./TodosForm.styles";

interface Props{
    setTodos: Dispatch<SetStateAction<ITodo[] | null>>
}

export const TodosForm: React.FC<Props> = ({ setTodos }) => {

    const [ title, setTitle ]               = useState<string | null>(null);
    const [ description, setDescription ]   = useState<string | null>(null);

    const handleTitleChange = (e: any) => setTitle(e.target.value.length > 0 ? e.target.value : null);

    const handleDescriptionChange = (e: any) => setDescription(e.target.value.length > 0 ? e.target.value : null);

    const handleCreateTodo = (): void => {
        if(title !== null && description !== null){
            setTodos((preValue: ITodo[] | any) => {
                const newId     = preValue.length > 0 ? preValue[preValue.length-1].id + 1 : 1;
                const newValue  = [ 
                    ...preValue, 
                    TodoHelper.createTodo(newId, title as string, description as string) 
                ]
                return newValue;
            });
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Create Todo</Text>
            
            <TextInput style={styles.input} placeholder="Title" onChange={handleTitleChange}/>
            <TextInput style={styles.input} placeholder="Description" onChange={handleDescriptionChange}/>

            <TouchableHighlight style={{...styles.button, opacity: title !== null && description !== null ? 1 : 0.5}}>
                <Button 
                color={Platform.OS === "ios" ? "white" : ""} 
                title="CREATE" 
                onPress={handleCreateTodo} />
            </TouchableHighlight>
        </View>
    );
}