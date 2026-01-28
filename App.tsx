import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LanguageScreen from "./src/screens/LanguageScreen";
import LoginScreen from "./src/screens/auth/Login";
import SignupScreen from "./src/screens/auth/SignUp";
import HomeScreen from "./src/screens/HomeScreen";

import "./src/services/i18n";

export type RootStackParamList = {
  Language: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Language"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
