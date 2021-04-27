import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        maxWidth: 400,
        marginTop: 15,
        marginRight: "auto",
        marginBottom: 0,
        marginLeft: "auto",
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "#212121"
    },
    title: {
        fontSize: 25,
        color: "white",
    },
    input: {
        height: 30,
        width: "80%",
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 10,
        backgroundColor: "white"
    },
    button: {
        width: "60%",
        marginTop: 10,
        marginBottom: 10
    }
});