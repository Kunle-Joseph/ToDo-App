import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { React, useState } from "react";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Add Todo"
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={() => submitHandler(text)}>
        <Text style={styles.text}>Add Todo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "coral",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
