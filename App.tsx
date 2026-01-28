import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LanguageScreen from "./src/screens/Language";
import WelcomeScreen from "./src/screens/Welcome";
import LoginScreen from "./src/screens/auth/Login";
import SignupScreen from "./src/screens/auth/SignUp";
import HomeScreen from "./src/screens/Home";
import ExploreScreen from "./src/screens/Explore";
import BazaarScreen from "./src/screens/Bazaar";

import "./src/services/i18n";


export type RootStackParamList = {
  Language: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Explore: undefined;
  Bazaar: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    
    {/* No Bottom Nav screens */}
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Language" component={LanguageScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />

    {/* Screens with bottom nav */}
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Explore" component={ExploreScreen} />
    <Stack.Screen name="Bazaar" component={BazaarScreen} />
    
    

    {/* Other screens */}
    
    
  </Stack.Navigator>
</NavigationContainer>
  );
}
