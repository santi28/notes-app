import React from 'react'

import { StatusBar } from 'expo-status-bar'
import StackNavigator from './src/Main'
import { NavigationContainer } from '@react-navigation/native'

import StatusBarHeight from './src/components/StatusBarHeight'

export default function App() {
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
