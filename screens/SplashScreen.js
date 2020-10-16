import * as React from "react";
import { View, Text, Button } from "react-native";

const SplashScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Splash Screen</Text>
    <Button
      title="Click to Login"
      onPress={() => navigation.navigate("Login")}
    ></Button>
  </View>
);

export default SplashScreen;
