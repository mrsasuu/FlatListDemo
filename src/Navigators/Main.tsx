import React from 'react'
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
          headerRight: () => <SwitchThemeButton />,
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
