import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback} from 'react-native';

const CategoryGridTile = props => {

    let TouchComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchComponent = TouchableNativeFeedback
    }

    return (
        <View 
            style={styles.categoryItem}>
            <TouchComponent 
                style={{flex: 1}}
                onPress={props.onSelect}
            >
                <View style={{...styles.container, backgroundColor: props.color}}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchComponent>   
        </View>
        
    );
}

const styles = StyleSheet.create({
    categoryItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5    
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },
    title: {
        fontFamily: 'open-san-bold',
        fontSize: 22,
        textAlign: 'right'
    }
})

export default CategoryGridTile;

