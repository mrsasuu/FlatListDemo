import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { useSelector } from 'react-redux'
import { useTheme } from '@/Hooks'
import { ListState } from '@/Store/List'
import { SwitchThemeButton } from '@/Components/index'

const Header = () => {
  const { Fonts, Layout } = useTheme()
  const selectedListItems = useSelector(
    (state: { list: ListState }) => state.list.selectedItems,
  )

  if (Platform.OS === 'ios') {
    return (
      <View style={styles.IOSContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[Fonts.textRegular, styles.titleContainer]}
        >
          Selected items: {selectedListItems.toString()}
        </Text>
      </View>
    )
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
      <SwitchThemeButton />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  IOSContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 8,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})

export default Header
