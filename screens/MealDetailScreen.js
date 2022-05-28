import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

export default function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.filter((meal) => meal.id === mealId);

  console.log(selectedMeal);

  
  
  return (
    <ScrollView>

      <Text style={styles.titleMeal}>{MEALS[0].title}</Text>
      <Image source={{ uri: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg' }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>45m</DefaultText>
        <DefaultText>simple</DefaultText>
        <DefaultText>pricey</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {MEALS[0].ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {MEALS[0].steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}

      
     
      {/* <Text>{selectedMeal.title}</Text> */}
      {/* <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))} */}
    </ScrollView>
  );
}

// MealDetailScreen.setOptions = navigationData => {
//   //const { mealId } = navigationData.route.params;
//   const mealId = navigationData.navigation.getParam('mealId');
//   const selectedMeal = MEALS.find((meal) => meal.id === mealId);
//   return {
//     title: selectedMeal.title
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  titleMeal: {
    // fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    padding: 10,
    color: 'green',
    fontWeight: 'bold'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
