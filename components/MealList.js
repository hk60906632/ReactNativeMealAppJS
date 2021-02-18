import React from 'react';
import { Platform, FlatList, View } from 'react-native';
import MealItem from './MealItem';


const MealList = props => {

    const onPress = (itemData) => {
        props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
                title: itemData.item.title,
                mealId: itemData.item.id
            }
        })
    }

    const renderListItems = (itemData) => {
        return (
            <MealItem 
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onPress={onPress.bind(this, itemData)}/>
        )
    }

    return(
        <View style= {{...props.style}}>
            <FlatList 
                data={props.data}
                keyExtractor = {(item, index) => item.id}
                renderItem = {(itemData, index) => renderListItems(itemData)}/>
        </View>
        
        )
}



export default MealList;