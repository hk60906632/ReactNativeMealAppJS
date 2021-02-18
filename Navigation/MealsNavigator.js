import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../Screen/CategoriesScreen';
import CategoryMealScreen from '../Screen/CategoryMealScreen';
import MealDetailScreen from '../Screen/MealDetailScreen';
import FavouritesScreen from '../Screen/FavouritesScreen';
import FilterScreen from '../Screen/FiltersScreen';


import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: 'open-san-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
};


const MealsNavigator =  createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        // navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        //     },
        //     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        // }
    },
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
    }
);


const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
},{
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
    }
);


const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>);
            },
            tabBarColor: Colors.primaryColor,
            // tabBarLabel: 'Meal!!!!!'
            //change Android Navigation Tab font type 
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}} >Meals</Text> : 'Meal'
        }
    },
    Favourites: {screen: FavNavigator, 
        navigationOptions: {
            tabBarLabel: 'Favourites!',
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>);
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}} >Favourites</Text> : 'Favourites'
        }
    }
}


const MealsFavTabNavigator = Platform.OS === 'ios' ? createBottomTabNavigator(
    tabScreenConfig, 
    {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        inactiveTintColor: Colors.primaryColor,
        //labelStyle is not avaliable for IOS 
        labelStyle: {
            fontFamily: 'open-san-bold'
        }
    }
}) : createMaterialBottomTabNavigator(
    tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        
        // barStyle: {
        //     backgroundColor: Colors.primaryColor
        // }
    }
);

const FilterNavigator = createStackNavigator({
    Filter: FilterScreen
}, {
    // initialRouteName: 'Categories',
    //Option 1 to set up the Navigation Drawer label name

    // navigationOptions: {
    //     drawerLabel: 'Filter !!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
    }
);

const MainNavigator = createDrawerNavigator({
    MealsFavs: { 
        screen : MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }},
    Filters: FilterNavigator
}, {
    //control the content in the drawer
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-san-bold'
        }
    }
});

export default createAppContainer(MainNavigator);