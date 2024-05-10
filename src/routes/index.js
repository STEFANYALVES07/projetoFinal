import React from "react";

//Stack Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";

// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Tab = createBottomTabNavigator();

//paginas
import RouteStack from "./routeStack";
import Horarios from "../pages/Horarios";
import Contato from "../pages/Contato";
import Localizacao from "../pages/Localizacao";

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#e6dfeb",
          borderTopColor: "transparent",
          padding: 5,
          shadowColor: "purple",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          justifyContent: "space-around", // Centraliza os ícones
          alignItems: "center", // Alinha os ícones verticalmente ao centro
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={RouteStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <AntDesign name="home" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Horarios"
        component={Horarios}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="clockcircleo" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Localização"
        component={Localizacao}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Ionicons name="location-outline" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Quem Somos"
        component={Contato}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <AntDesign name="exclamationcircleo" size={25} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
