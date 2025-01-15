import { StyleSheet, Text, View } from "react-native";
import { PrimaryTitle } from "../components/ui/PrimaryTitle";
import { useState } from "react";
import { NumberContainer } from "../components/game/NumberContainer";

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

type GameScreenProps = {
  userNumber: number;
};

const GameScreen = ({ userNumber }: GameScreenProps) => {
  const initalGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initalGuess);

  return (
    <View style={styles.screen}>
      <PrimaryTitle>Opponent's Guess</PrimaryTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
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
