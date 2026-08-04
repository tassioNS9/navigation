import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../app/Home";
import Product from "../app/Product";

export type StackRoutesList = {
  Home: undefined;
  Product: undefined;
};

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}
