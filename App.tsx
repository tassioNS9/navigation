import Product from "@/app/Product";
import React from "react";
import { StyleSheet } from "react-native";

export default function App() {
  return <Product />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
