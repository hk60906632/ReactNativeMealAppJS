import React from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground} from 'react-native';
import DefaultText from '../components/DefaultText';

const MealItem = props => {

    let TouchComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchComponent = TouchableNativeFeedback;
    }


    return(
        <View style={styles.mealItemContainer}>
            <TouchComponent onPress={props.onPress}>
                <View > 
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{props.duration}</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability}</DefaultText>
                    </View>

                    {/* <View style={styles.imageContainer}>
                        <Image
                            source={{uri: props.imageUrl}}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View> */}
                </View>
            </TouchComponent>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    mealItemContainer: {
        flex: 1,
        margin: 10,
        maxWidth: '100%',
        backgroundColor: '#f5f5f5',
        height: 200,
    },
    contentContainer: {
        alignItems: 'center',
        width: '100%'
    },
    imageContainer: {
        width: 150,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-san-bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;