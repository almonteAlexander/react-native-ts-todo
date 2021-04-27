import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: Platform.OS === "ios" ? 200 : "80%",
        maxWidth: 250,
        marginTop: 15,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        backgroundColor: "#7EC082"
    },
    title: {
        width: "100%",
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: "white",
        textAlign: "center",
        backgroundColor: "#2B2B2B",
    },
    description: {
        width: "100%",
        textAlign: "center",
        color: "white",
        fontSize: 16,
        paddingTop: 20,
        paddingBottom: 20
    },
    deleteButton: {
        width: "80%",
        marginBottom: 10,
        backgroundColor: "#AE3333",
    }
});