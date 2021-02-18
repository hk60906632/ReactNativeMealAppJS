import React from 'react';
import {View,Switch, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import FilterScreen from '../Screen/FiltersScreen';

const FilterSwitch = props => {
    return (
    <View style={styles.filterContainer}>
        <Text>{props.children}</Text>
        <Switch 
            value={props.value} 
            // onValueChange={newValue => props.setValue(newValue)}
            onValueChange={props.onChange}
            trackColor={{true: Colors.primaryColor,
                        false: 'grey'}}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}/>
    </View>)
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
})

export default FilterSwitch;