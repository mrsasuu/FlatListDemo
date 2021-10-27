import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Switch } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@/Hooks'
import { ListState } from '@/Store/List'
import Sun from '@/Assets/Images/icons/sun.png'
import Moon from '@/Assets/Images/icons/moon.png'
import { changeTheme, ThemeState } from '@/Store/Theme'

const Header = () => {
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
    <View style={Layout.row}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[Fonts.textRegular, styles.titleContainer]}
      >
        Selected items: {selectedListItems.toString()}
      </Text>
      <View style={[Layout.row, Layout.rowHEnd, styles.switchContainer]}>
        <Image source={Sun} style={[Gutters.regularLMargin, styles.icon]} />
        <Switch
          value={isDark || false}
          color={Colors.primary}
          onValueChange={onSwitchChange}
        />
        <Image source={Moon} style={[Gutters.smallLMargin, styles.icon]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  titleContainer: {
    flex: 8,
  },
  switchContainer: {
    flex: 4,
  },
})

export default Header
