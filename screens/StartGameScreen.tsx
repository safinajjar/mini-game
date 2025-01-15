import { Alert, StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/colors";
import { PrimaryTitle } from "../components/ui/PrimaryTitle";
import Card from "../components/ui/Cart";
import InstructionsText from "../components/ui/InstructionsText";

type StartGameScreenProps = {
  onPickedNumber: (number: number) => void;
};

const StartGameScreen = ({ onPickedNumber }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState<string>();

  const handleChangeInput = (text: string) => {
    setEnteredNumber(text);
  };

  const handleResetInput = () => {
    setEnteredNumber("");
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(enteredNumber!);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: handleResetInput,
        },
      ]);
      return;
    }

    console.log("Valid number: ", chosenNumber);
    onPickedNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <PrimaryTitle>Guess my number!</PrimaryTitle>
      <Card>
        <InstructionsText>Enter a number</InstructionsText>
        <TextInput
          value={enteredNumber?.toString()}
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={handleChangeInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
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

export default StartGameScreen;
