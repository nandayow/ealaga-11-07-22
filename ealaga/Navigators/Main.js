import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Stacks
import UserNavigator from "./UserNavigator";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";

// Auth
import AuthGlobal from "../Context/store/AuthGlobal";

const Stack = createNativeStackNavigator();
const Main = () => {
  const context = useContext(AuthGlobal);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* {context.stateUser.isAuthenticated === false ? ( */}
      <Stack.Screen
        name="User"
        component={UserNavigator}
        options={{ headerShown: false }}
      />
      {/* // ) : null} */}
      <Stack.Screen name="Home" component={HomeNavigator} />
      <Stack.Screen name="Profile" component={ProfileNavigator} />
    </Stack.Navigator>
  );
};

export default Main;
