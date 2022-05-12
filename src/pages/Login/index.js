import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "./styles";

const App = () => {
  return (
    <Container>
      <Text>Login Page</Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default App;
