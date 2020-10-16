import * as React from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../components/context";

const AccountScreen = () => {
  const { logOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Account Screen</Text>
      <Button title="LogOut" onPress={() => logOut()}></Button>
    </View>
  );
};

export default AccountScreen;
