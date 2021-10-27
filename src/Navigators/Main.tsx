import React from 'react'
import { Platform } from 'react-native'
import { ExampleContainer } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '@/Components/Header'
import { SwitchThemeButton } from '@/Components'

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
          headerRight: () =>
            Platform.OS === 'ios' ? <SwitchThemeButton /> : null,
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
