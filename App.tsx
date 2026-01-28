import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LanguageScreen from "./src/screens/Language";
import WelcomeScreen from "./src/screens/Welcome";
import LoginScreen from "./src/screens/auth/Login";
import SignupScreen from "./src/screens/auth/SignUp";
import HomeScreen from "./src/screens/Home";

import "./src/services/i18n";

export type RootStackParamList = {
  Language: undefined;
  Welcome: undefined;
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
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
