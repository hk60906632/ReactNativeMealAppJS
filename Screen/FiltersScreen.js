import React, { useEffect, useState, useCallback } from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import FilterSwitch from '../components/FilterSwitch';


const FilterScreen = props => {

    const { navigation } = props;

    const [isGlutinFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    
    //communicating between your navigation options and your component

    //useCallback() wrap a function so that this functin is actually cached by React
    //is only recreated if its dependencies changed
    //when this function is recreated, it will trigger the useEffect()
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutinFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        };

        console.log(appliedFilters);
    }, [isGlutinFree, isLactoseFree, isVegan, isVegetarian]);


    //with the [saveFilters] this will always rebuild when you component rebuild
    //cannot put 'navigation' to the dependency , because setParams() will change the navigation object, will trigger useEffect()
    //infinite loop
    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);



    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Availabel Filters / Restrictions</Text>
            {/* <View style={styles.filterContainer}>
                <Text>Gluten-free</Text>
                <Switch 
                    value={isGlutinFree} 
                    onValueChange={newValue => setIsGlutenFree(newValue)}
                    trackColor={{true: Colors.primaryColor,
                                false: 'grey'}}
                    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}/>

            </View> */}
            <FilterSwitch value={isGlutinFree} onChange={newValue => setIsGlutenFree(newValue)}>Gluten-free</FilterSwitch>
            <FilterSwitch value={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}>Lactose-free</FilterSwitch>
            <FilterSwitch value={isVegan} onChange={newValue => setIsVegan(newValue)}>Vegan</FilterSwitch>
            <FilterSwitch value={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}>Vegeterian</FilterSwitch>
        </View>
    );
};

FilterScreen.navigationOptions = (navigationData) => {
    return{
        headerTitle: 'Filter Meals',
        headerLeft: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName='ios-menu' onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>,
        headerRight: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName='ios-save' onPress={navigationData.navigation.getParam('save')} />
                </HeaderButtons>,
    }
    
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-san-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
});

export default FilterScreen;