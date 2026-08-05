import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

import Home from "../app/Home";
import Product from "../app/Product";
import { MaterialIcons } from "@expo/vector-icons";

export type BottomRoutesList = {
  Home: undefined;
  Product: undefined | { productId: string };
};

export type BottomRoutesProps<T extends keyof BottomRoutesList> =
  BottomTabScreenProps<BottomRoutesList, T>;

const Tab = createBottomTabNavigator<BottomRoutesList>();

export function BottomRoutes() {
  return (
    // tabBarActiveTintColor = cor do ícone ativo
    // tabBarInactiveTintColor = cor do ícone inativo
    // tabBarLabelPosition = posição do label (ao lado do ícone)
    // tabBarStyle = estilo da barra de navegação
    // tabBarShowLabel = exibir ou não o label
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2C46B1",
        tabBarInactiveTintColor: "#444444",
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Ìnicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarStyle: { backgroundColor: "#F0F0F0" },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
