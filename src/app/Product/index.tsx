import React from "react";
import { View } from "react-native";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { ButtonIcon } from "../components/ButtonIcon";
import { StackRoutesList } from "@/routes/StackRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ProductProps = NativeStackScreenProps<StackRoutesList, "Product">;

export default function Product({ navigation, route }: ProductProps) {
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
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product {route.params?.productId}</Title>
      </Header>
    </View>
  );
}
