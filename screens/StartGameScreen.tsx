import { Alert, StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/colors";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
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
