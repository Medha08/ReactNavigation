import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Splash" component={SplashScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
