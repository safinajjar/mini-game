import { Text, View } from "react-native";

type PrimaryButtonProps = {
  children: string;
};

export const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};
