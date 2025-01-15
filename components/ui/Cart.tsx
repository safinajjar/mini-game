import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    marginTop: 36,
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
});
