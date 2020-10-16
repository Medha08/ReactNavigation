import * as React from "react";
import { View, Text, Button } from "react-native";

const CreatorScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Explore Screen</Text>
    <Button
      title="You are on CreatorScreen"
      onPress={() => alert("Button Clicked")}
    ></Button>
  </View>
);

export default CreatorScreen;
