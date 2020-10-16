import * as React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Move to Home Again"
        onPress={() => navigation.push("Home")}
      ></Button>
      <Button
        title="Go Login"
        onPress={() => navigation.navigate("MainStack")}
      ></Button>
      <Button
        title="Go To First Screen"
        onPress={() => navigation.popToTop()}
      ></Button>
      <Button
        title="Move Back"
        onPress={() => {
          alert("If there is something in stack Move Back");
          if (navigation.canGoBack()) navigation.goBack();
        }}
      ></Button>
    </View>
  );
};
export default HomeScreen;
