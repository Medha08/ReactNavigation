import * as React from "react";
import { View, Text, Button } from "react-native";

const ExploreScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Explore Screen</Text>
    <Button
      title="You are on Explore"
      onPress={() => alert("Button Clicked")}
    ></Button>
  </View>
);

export default ExploreScreen;
