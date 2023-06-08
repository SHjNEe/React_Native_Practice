import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World!!!!</Text>
      <Text>Hello World!!!!</Text>
      <Text style={styles.text}>Hello World!!!!</Text>
      <Button title='Tap me'/>     
      <StatusBar style="auto" /> */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your name"/>
        <Button title='Add goal'/>     
      </View>
      <View style={styles.goalsContainer}>
        <Text>List goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    // height: 200,
    alignItems: 'center',
    borderBottomWidth: 1,

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 8,
    padding: 10,
    flex: 2,
  },
  goalsContainer: {
    flex: 4
  }
});


