import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}
