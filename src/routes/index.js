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
          backgroundColor: "white",
          borderTopColor: "transparent",
          padding: 5,
          bottom: 20,
          right: 15,
          left: 15,
          position: "absolute",
          shadowColor: "purple0",
          borderRadius: 15,
          shadowRadius: 7,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          alignItems: "center",
          alignContent: "center",
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
