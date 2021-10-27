import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { useSelector } from 'react-redux'
import { ThemeState } from '@/Store/Theme'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme, Colors } = useTheme()
  const { colors } = NavigationTheme

  const isDark = useSelector(
    (state: { theme: ThemeState }) => state.theme.darkMode,
  )

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors,
    },
  }

  const darkTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors,
    },
    dark: true,
  }

  return (
    <PaperProvider theme={isDark ? darkTheme : lightTheme}>
      <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Startup" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  )
}

export default ApplicationNavigator
