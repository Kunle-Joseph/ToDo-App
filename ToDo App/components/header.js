import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { React } from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: 80, paddingTop: 38, backgroundColor: "coral" },
  title: {
    padding: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
