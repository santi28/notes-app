import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import StackNavigator from './src/Main'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="inverted" />
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <Text>Open up App.tsx to start working on your app!</Text> */}

    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
