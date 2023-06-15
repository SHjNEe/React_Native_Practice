import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Oppenent's Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View>
        <Text>Logs Round</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
