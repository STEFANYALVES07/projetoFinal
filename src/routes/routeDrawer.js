import React from "react";

// Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; // Importa o componente NavigationContainer de "@react-navigation/native" para envolver a navegação da aplicação.
import { createDrawerNavigator } from "@react-navigation/drawer";

// Páginas
import Home from "../pages/Home"; // Importa o componente Home da pasta "./src/pages/Home".
import Produtos from "../pages/Produtos";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        screenOptions={{
          drawerStyle: { backgroundColor: "white" },
          drawerActiveBackgroundColor: "purple",
          drawerActiveTintColor: "white",

          drawerInactiveBackgroundColor: "white",
          drawerInactiveTintColor: "black",
        }}
      >
        <Drawer.Screen name="Home" component={Home} />

        <Drawer.Screen name="Nossos produtos" component={Produtos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
