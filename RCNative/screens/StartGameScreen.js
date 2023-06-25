import { TextInput, Button, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function StartGameScreen({ onConfirmNumber }) {
  const [enteredValue, setEnteredValue] = useState("");
  function numberInputHandler(enteredInputValue) {
    setEnteredValue(enteredInputValue);
  }
  function resetInputHandler() {
    setEnteredValue("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber < 0) {
      //Show alert
      // Alert.prompt('')
      Alert.alert(
        "Invalid Number",
        "Number must be a number between 1 and 99",
        [{ text: "Okey", stlye: "destructive", onPress: resetInputHandler }]
      );
    } else {
      onConfirmNumber(chosenNumber);
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredValue}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "back",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
