import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const FavouriteScreen = props => {

    const dataList = MEALS.filter(data => data.id === 'm1' || data.id === 'm2')

    return(
        <MealList
            data={dataList}
            style={styles.flatListContainer}
            navigation={props.navigation} />
    );
};

FavouriteScreen.navigationOptions = (navigationData) => {
    return ({
        headerTitle: 'Your Favourites',
        headerLeft: 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
    })
}

const styles = StyleSheet.create({
    
    // flatListContainer: {
    //     width: '100%',
    //     height: '80%'
    // }
});

export default FavouriteScreen;