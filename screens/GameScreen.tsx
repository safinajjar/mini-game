import { StyleSheet, Text, View } from "react-native";
import { PrimaryTitle } from "../components/PrimaryTitle";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <PrimaryTitle>Opponent's Guess</PrimaryTitle>
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + */}
        {/* - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
