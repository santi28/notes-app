import React from 'react'

import { View } from 'react-native'
import Constants from 'expo-constants'
import { theme } from '../theme'

const StatusBarHeight = () => {
  return (
    <View
      style={{
        height: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary
      }}
    />
  )
}

export default StatusBarHeight
