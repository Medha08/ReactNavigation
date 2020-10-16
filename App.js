import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./screens/MainTabs";
import MainStack from "./screens/MainStack";
import { AuthContext } from "./components/context";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    logIn: () => {
      setUserToken("bfiff");
      setIsLoading(false);
    },
    logOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? <MainTabs></MainTabs> : <MainStack></MainStack>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
