import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

type InstructionsTextProps = {
  children: string;
  style?: object;
};

const InstructionsText = ({ children, style }: InstructionsTextProps) => {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
};

export default InstructionsText;

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
