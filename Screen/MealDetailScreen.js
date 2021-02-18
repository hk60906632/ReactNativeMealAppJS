import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
};

const MealDetailScreen = props => {

    const selectedMealDetail = MEALS.find(item => item.id === props.navigation.getParam('mealId'))

    return(
        <ScrollView>
            {/* <View style={styles.screen}> */}
                <Image 
                        source={{uri: selectedMealDetail.imageUrl}}
                        style={styles.image}
                        resizeMode="cover"/>
                    
                    
                    <View style={styles.mealDetail}>
                        <DefaultText>{selectedMealDetail.duration}</DefaultText>
                        <DefaultText>{selectedMealDetail.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{selectedMealDetail.affordability}</DefaultText>
                    </View>

                    <Button title="Go back to Catagories" onPress={() => {
                        props.navigation.popToTop()
                    }}/>
                    {/* <View
                        style={styles.recipeContainer}>
                            <Text>{selectedMealDetail.title}</Text>
                            <Text>{selectedMealDetail.affordability}</Text> 
                            <Text>{selectedMealDetail.complexity}</Text> 
                            <Text>{selectedMealDetail.imageUrl}</Text> 
                            <Text>{selectedMealDetail.duration}</Text> 
                            <Text>{selectedMealDetail.ingredients}</Text> 
                            <Text>{selectedMealDetail.steps}</Text> 
                            <Text>{selectedMealDetail.isGlutenFree}</Text> 
                            <Text>{selectedMealDetail.isVegan}</Text>
                            <Text>{selectedMealDetail.isVegetarian}</Text> 
                            <Text>{selectedMealDetail.isLactoseFree}</Text> 
                    </View> */}
                    <Text style={styles.title}>Ingredients</Text>
                    {/* <Text>{selectedMealDetail.ingredients}</Text> */}

                    {selectedMealDetail.ingredients.map(item => <ListItem key={item}>{item}</ListItem>)}

                    <Text style={styles.title}>Steps</Text>

                    {selectedMealDetail.steps.map(step => <ListItem key={step}>{step}</ListItem>)}

            {/* </View> */}
                
        </ScrollView>
       
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.getParam('title'),
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Favourite' 
                iconName='ios-star' 
                onPress={() => {
                    console.log('Marked as favourite')
            }}/>
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    mealDetail: {
        padding : 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: '15%'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontFamily: 'open-san-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
    
});

export default MealDetailScreen;