import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

import MealList from '../components/MealList';

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(item => item.id === catId);


    let TouchComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchComponent = TouchableNativeFeedback;
    }

    // const corrospndingMeals = [];

    // MEALS.map(item => {
    //     if(item.categoryIds.includes(catId)) {
    //         corrospndingMeals.push( {...item})
    //     }
    // });

    const corrospndingMeals = MEALS.filter(item => item.categoryIds.indexOf(catId) >= 0);
    

    const onPress = (itemData) => {
        props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
                title: itemData.item.title,
                // affordability: itemData.item.affordability,
                // complexity: itemData.item.complexity,
                // imageUrl: itemData.item.imageUrl,
                // duration: itemData.item.duration,
                // ingredients: itemData.item.ingredients,
                // steps: itemData.item.steps,
                // isGlutenFree: itemData.item.isGlutenFree,
                // isVegan: itemData.item.isVegan,
                // isVegetarian: itemData.item.isVegetarian,
                // isLactoseFree: itemData.item.isLactoseFree
                mealId: itemData.item.id
            }
        })
    }

    // const renderGridItem = (itemData) => {
    //     return (
    //         // <TouchComponent
    //         //     style={styles.touchComponent}
    //         //     onPress={onPress.bind(this, itemData)}
    //         //     >
    //         //     <View style={styles.gridItem}>
    //         //         <Text>{itemData.item.categoryIds}</Text>
    //         //         <Text>{itemData.item.id}</Text>
    //         //         <Text>{itemData.item.title}</Text>
    //         //         <Text>{itemData.item.affordability}</Text> 
    //         //         <Text>{itemData.item.complexity}</Text> 
    //         //         <Text>{itemData.item.imageUrl}</Text> 
    //         //         <Text>{itemData.item.duration}</Text> 
    //         //         <Text>{itemData.item.ingredients}</Text> 
    //         //         <Text>{itemData.item.steps}</Text> 
    //         //         <Text>{itemData.item.isGlutenFree}</Text> 
    //         //         <Text>{itemData.item.isVegan}</Text>
    //         //         <Text>{itemData.item.isVegetarian}</Text> 
    //         //         <Text>{itemData.item.isLactoseFree}</Text> 
    //         //     </View>
    //         // </TouchComponent>
    //         <MealItem 
    //                 title={itemData.item.title}
    //                 imageUrl={itemData.item.imageUrl}
    //                 duration={itemData.item.duration}
    //                 complexity={itemData.item.complexity}
    //                 affordability={itemData.item.affordability}
    //                 onPress={onPress.bind(this, itemData)}
    //             />
    //     )
    // }

    return(
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            {/* <Button title="Meal Detail Screen" onPress={() => {
                props.navigation.navigate('MealDetail');
            }}/> */}

            <Button title="Go back" onPress={() => {
                props.navigation.goBack();
            }} />

            {/* <View style={styles.mealScreenFlatList}> 
                <FlatList 
                    data={corrospndingMeals}
                    keyExtrator = {(item, index) => item.id}
                    renderItem={(itemData, index) => renderGridItem(itemData)}
                />
            </View> */}

            <MealList 
                data={corrospndingMeals} 
                style={styles.mealScreenFlatList}
                navigation={props.navigation}/>
        </View>
    );
};

//react navtive will call this function for youuyuuu
CategoryMealScreen.navigationOptions = (navigationData) => {
   const catId = navigationData.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(item => item.id === catId);

   return {
       headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
        maxWidth: '90%'
    },
    mealScreenFlatList: {
        width: '100%',
        height: '80%'
    }
});

export default CategoryMealScreen;