import * as React from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../components/context";

const LoginScreen = ({ navigation }) => {
  const { logIn } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button title="Move to Home" onPress={() => logIn()}></Button>
      <Button
        title="Move to Splash"
        onPress={() => navigation.goBack()}
      ></Button>
    </View>
  );
};

export default LoginScreen;
