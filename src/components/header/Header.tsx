import React from "react";
import { SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./Header.styles";

export const Header: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>My Tasks</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}