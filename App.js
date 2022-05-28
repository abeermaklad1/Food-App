import React from "react";
import { StyleSheet, Text, View, Platform, Button } from "react-native";
//import MyStack from './navigation/index';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FiltersScreen from "./screens/FiltersScreen";
import { StatusBar } from "react-native";
import Colors from "./constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";


const Stack = createStackNavigator();
MyStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  //console.log("Menu");
                  navigation.toggleDrawer();
                  
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        options={{
          title: "Category Meals",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
        }}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={{
          title: "Meal Details",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  console.log("Mark as favorite!");
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const MyStackFav = createStackNavigator();

function MyStackFavs({ navigation }) {
  return (
    <MyStackFav.Navigator>
      <MyStackFav.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: "Your Favorites",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    //console.log("Menu");
                    navigation.toggleDrawer();
                    
                  }}
                />
              </HeaderButtons>
            ),
        }}
      />
      <MyStackFav.Screen name="MealDetailScreen" component={MealDetailScreen} />
    </MyStackFav.Navigator>
  );
}
const StackFilter = createStackNavigator();

function MyStackFilter() {
  return (
    <StackFilter.Navigator>
      <StackFilter.Screen name="FiltersScreen" component={FiltersScreen} 
      options={{
        title: "Filter Meals",
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="save"
                iconName="ios-save"
                onPress={() => {
                  console.log("saved!");
                }}
              />
            </HeaderButtons>
          ),
      }}/>
    </StackFilter.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: Colors.accentColor,
      //inactiveTintColor: "#FFFFFF",
      drawerLabel:{
        fontWeight: 'bold'
      }
    }}
      drawerStyle={{
        // backgroundColor: "#c6cbef",
        // width: 240,
        
      }}
    >
      <Drawer.Screen
        name="Home"
        children={MyStack}
        options={{
          title: "Meal Categories",
        }}
      />
      {/* <Drawer.Screen name="FavoritesScreen" children={MyStackFavs} /> */}
      <Drawer.Screen
        name="MyStackFilter"
        children={MyStackFilter}
        options={{
          title: "Filter Meals",
        }}
      />
    </Drawer.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator
        screenOptions={{
          animationEnabled: Platform.OS == "ios" ? true : false,
          gestureEnabled: true,
          unmountOnBlur: true,
        }}
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
          inactiveTintColor: "#FFFFFF",
          labelStyle: styles.title,
          labelPosition: "below-icon",
          tabStyle: styles.tabStyle,
          keyboardHidesTabBar: true,
          style: [
            styles.tabContainer,
            Platform.OS == "ios" && hasNotch()
              ? { height: 65, paddingBottom: 10 }
              : null,
          ],
        }}
      >
        <Tab.Screen
          name="Meals"
          children={MyDrawer}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-restaurant"
                color={focused ? Colors.accentColor : "grey"}
                style={styles.icon}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          children={MyStackFavs}
          options={{
            title: "Favorites!",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-star"
                color={focused ? Colors.accentColor : "grey"}
                style={styles.icon}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    height: 55,
    backgroundColor: "#674A91",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 5,
  },
});
