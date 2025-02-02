import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

type PrimaryTitleProps = {
  children: string;
};

export const PrimaryTitle = ({ children }: PrimaryTitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
});
