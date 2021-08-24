import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { navigationLabels } from "../constants/constants";
import EatingPlaces from "../screens/browse-places";
import FoodMenu from "../screens/food-menu";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name={navigationLabels.HOME} component={Home} />
        <Stack.Screen
          name={navigationLabels.FOODMENUS}
          component={FoodMenu}
          options={{ title: "Menu" }}
        />
        <Stack.Screen
          name={navigationLabels.PLACESTOEAT}
          component={EatingPlaces}
          options={{ title: "Places to eat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
