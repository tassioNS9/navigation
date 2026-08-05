import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";

import Home from "../app/Home";
import Product from "../app/Product";
import { MaterialIcons } from "@expo/vector-icons";

export type DrawerRoutesList = {
  Home: undefined;
  Product: undefined | { productId: string };
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
  DrawerScreenProps<DrawerRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#2C46B1",
        drawerInactiveTintColor: "#444444",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Ìnicio",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Product"
        component={Product}
        options={{
          drawerLabel: "Produto",
          drawerStyle: { backgroundColor: "#F0F0F0" },
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
