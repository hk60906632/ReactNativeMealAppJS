import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform, LogBox} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

import CategoryGridTile from '../components/CategoryGridTile';


LogBox.ignoreAllLogs();

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return(
            // <TouchableOpacity 
            //     style={{ ...styles.categoryItem ,backgroundColor: itemData.item.color }}
            //     onPress={() => {
            //         props.navigation.navigate({
            //             routeName: 'CategoryMeals',
            //             params: {
            //                 categoryId: itemData.item.id
            //             }
            //         })
            // }}>
            //     <View >
            //         <Text>{itemData.item.title}</Text>
            //     </View>
            // </TouchableOpacity>
            <CategoryGridTile 
                color={itemData.item.color}
                title={itemData.item.title} 
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}/>   
        );
    }
    

    // console.log(props)
    return(
        <FlatList 
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            contentContainerStyle = {styles.categoriesFlatList}
            renderItem={(itemData, index) => renderGridItem(itemData)}
        />
    );
};

//javascript function is an object , so you can access CategoriesScreen and add property after its creation
CategoriesScreen.navigationOptions = (navigationData) => 
{
    return {
        headerTitle: 'Meal Categories',
        headerLeft:() => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName='ios-menu' onPress={() => {
                            navigationData.navigation.toggleDrawer();
                        }} />
                    </HeaderButtons>
    }  
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'open-san-bold'
    },
    categoryItem: {
        flex: 1,
        padding: 20,
        margin: 20,
        height: 150
    },
    // categoriesFlatList: {
    //     alignItems: 'center',
    //     flexGrow: 1
    // }
});

export default CategoriesScreen;
