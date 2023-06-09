import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredInput, setEnteredInput] = useState("");
  const [goals, setGoal] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredInput(enteredText);
  }
  function addGoalHandler() {
    setGoal((prev) => [...prev, { text: enteredInput, key: Math.random() }]);
    // setEnteredInput("");
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={enteredInput}
          placeholder="Enter your name"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      {/* <ScrollView alwaysBounceVertical style={styles.goalsContainer}>
        {goals.map((goal) => (
          <Text style={styles.goalItem} key={goal}>
            {goal}
          </Text>
        ))}
      </ScrollView> */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    // height: 200,
    alignItems: "center",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    marginRight: 8,
    padding: 10,
    flex: 2,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e06ac",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
