import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    // When we have a single component inside the template, we can simply make the element tag self closing and it will automatically render its children, instead of having to write {children} prop between the open and closing tags.

    <View 
      style={[{backgroundColor: theme.background}, style]}
      {...props}
    />
  )
}

export default ThemedView