import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";

const Stack = createStackNavigator();
MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        
      />
      <Stack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        
      />
      <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};
