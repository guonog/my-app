import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "./styles";

const App = () => {
  return (
    <Container>
      <Text>Home Page</Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default App;
