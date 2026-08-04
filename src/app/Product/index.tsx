import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { ButtonIcon } from "../components/ButtonIcon";

export default function Product() {
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
        <ButtonIcon name="arrow-circle-left" />
        <Title>Product</Title>
      </Header>
    </View>
  );
}
