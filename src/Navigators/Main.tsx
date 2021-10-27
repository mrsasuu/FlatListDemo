import React from 'react'
import { withTheme } from 'react-native-paper'
import { Switch } from 'react-native-paper'
import { ExampleContainer } from '@/Containers'
import { useDispatch, useSelector } from 'react-redux'
import { ListState } from '@/Store/List'
import { Image, Text, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { changeTheme, ThemeState } from '@/Store/Theme'
import { createStackNavigator } from '@react-navigation/stack'
import Sun from '@/Assets/Images/icons/sun.png'
import Moon from '@/Assets/Images/icons/moon.png'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Fonts, Colors, Layout, Gutters } = useTheme()
  const dispatch = useDispatch()
  const selectedListItems = useSelector(
    (state: { list: ListState }) => state.list.selectedItems,
  )
  const isDark = useSelector(
    (state: { theme: ThemeState }) => state.theme.darkMode,
  )

  const onSwitchChange = () => {
    dispatch(changeTheme({ theme: undefined, darkMode: !isDark }))
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          headerTitle: () => (
            <View style={Layout.row}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[
                  Fonts.textRegular,
                  {
                    flex: 8,
                  },
                ]}
              >
                Selected items: {selectedListItems.toString()}
              </Text>
              <View
                style={[
                  Layout.row,
                  Layout.rowHEnd,
                  {
                    flex: 4,
                  },
                ]}
              >
                <Image
                  source={Sun}
                  style={[
                    Gutters.regularLMargin,
                    {
                      width: 25,
                      height: 25,
                    },
                  ]}
                />
                <Switch
                  value={isDark || false}
                  color={Colors.primary}
                  onValueChange={onSwitchChange}
                />
                <Image
                  source={Moon}
                  style={[
                    Gutters.smallLMargin,
                    {
                      width: 25,
                      height: 25,
                    },
                  ]}
                />
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default withTheme(MainNavigator)
