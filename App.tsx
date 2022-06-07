/* eslint-disable camelcase */

import React from 'react'

import { StatusBar } from 'expo-status-bar'
import StackNavigator from './src/Main'
import { NavigationContainer } from '@react-navigation/native'

import { Text } from 'react-native'

import StatusBarHeight from './src/components/StatusBarHeight'

// import SplashScreen from 'expo-splash-screen'
import { useFonts, Outfit_700Bold } from '@expo-google-fonts/outfit'

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_700Bold
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <NavigationContainer>
      <StatusBarHeight />
      <StackNavigator />
      <StatusBar style="inverted" />
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <Text>Open up App.tsx to start working on your app!</Text> */}

    // </View>
  )
}
