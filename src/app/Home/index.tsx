import React from "react";
import { View } from "react-native";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { ButtonIcon } from "../components/ButtonIcon";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        paddingTop: 64,
        backgroundColor: "#F0F0F0",
      }}
    >
      <Header>
        <Title>Home</Title>
        <ButtonIcon name="add-circle" />
      </Header>
    </View>
  );
}
