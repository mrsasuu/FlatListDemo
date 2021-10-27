import React from 'react'
import { withTheme } from 'react-native-paper'
import { ExampleContainer } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '@/Components/Header'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          headerTitle: () => <Header />,
        }}
      />
    </Stack.Navigator>
  )
}

export default withTheme(MainNavigator)
