import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from '../components/MealList';

export default function CategoryMealsScreen({ route, navigation }) {
  // const renderMealItem = (itemData) => {
  //   return (
  //     <MealItem
  //       title={itemData.item.title}
  //       image={itemData.item.imageUrl}
  //       duration={itemData.item.duration}
  //       complexity={itemData.item.complexity}
  //       affordability={itemData.item.affordability}
  //       onSelectMeal={() => {navigation.navigate("MealDetailScreen", {
  //          mealId: itemData.item.id
  //       })}}
  //     />
  //   );
  // };
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return  <MealList listData={displayedMeals} navigation={navigation} />
    // <View style={styles.container}>
    //   <Text> {selectedCategory.title} </Text>
    //   <FlatList
    //     data={displayedMeals}
    //     keyExtractor={(item, index) => item.id}
    //     renderItem={renderMealItem}
    //     style={{ width: "100%" }}
    //   />
      /* <Text>CategoriesScreen</Text>
      <Text> {selectedCategory.title} </Text>
      <Button
        title="Go to MealDetailScreen"
        onPress={() => navigation.navigate("MealDetailScreen")}
      />
      <Button
        title="Go to CategoriesScreen"
        onPress={() => navigation.navigate("CategoriesScreen")}
      />
      <Text>CategoriesScreen</Text> */
    // </View>
  
}

