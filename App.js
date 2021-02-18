import React, { useState } from 'react';
import {  Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';

import * as Font from 'expo-font';

import CategoriesScreen from './Screen/CategoriesScreen';

import MealsNavigator from './Navigation/MealsNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-san-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded){
    return (
      <AppLoading 
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
          onError={(err) => console.log(err)}
      />
    )
  };

  return (
     <MealsNavigator />
  );
}


