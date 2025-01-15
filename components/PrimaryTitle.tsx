import { StyleSheet, Text } from "react-native";

type PrimaryTitleProps = {
  children: string;
};

export const PrimaryTitle = ({ children }: PrimaryTitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
  },
});
