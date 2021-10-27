import React from 'react'
import { View, Image, StyleSheet, Platform } from 'react-native'
import { Switch } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@/Hooks'
// @ts-ignore
import Sun from '@/Assets/Images/icons/sun.png'
// @ts-ignore
import Moon from '@/Assets/Images/icons/moon.png'
import { changeTheme, ThemeState } from '@/Store/Theme'

const SwitchThemeButton = () => {
  const { Colors, Layout, Gutters } = useTheme()
  const dispatch = useDispatch()
  const isDark = useSelector(
    (state: { theme: ThemeState }) => state.theme.darkMode,
  )

  const onSwitchChange = () => {
    dispatch(changeTheme({ theme: undefined, darkMode: !isDark }))
  }

  return (
    <View style={[Layout.row, styles.switchContainer]}>
      <Image
        source={Sun}
        style={[
          Gutters.regularLMargin,
          Gutters.smallRMargin,
          Platform.OS === 'ios' ? styles.iconIOS : styles.icon,
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
          Gutters.smallRMargin,
          Platform.OS === 'ios' ? styles.iconIOS : styles.icon,
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  iconIOS: {
    width: 10,
    height: 10,
  },
  switchContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
})

export default SwitchThemeButton
