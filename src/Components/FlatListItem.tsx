import React, { FC, useState } from 'react'
import { useTheme } from '@/Hooks'
import { Linking, StyleSheet, Text, View } from 'react-native'
import { Checkbox, List } from 'react-native-paper'
import { formatLink, validURL } from '@/Utils/Utils'

interface FlatListItemProps {
  index: number
  onPress?: (index: number) => void
  isChecked: boolean
  [key: string]: string | number | boolean | Function | undefined
}

const FlatListItem: FC<FlatListItemProps> = ({
  index,
  isChecked,
  onPress,
  ...otherProps
}) => {
  const { Fonts, Colors } = useTheme()
  const [isCheckedLocal, setIsCheckedLocal] = useState<boolean>(
    isChecked || false,
  )

  const handleOnPressCheckbox = () => {
    setIsCheckedLocal(!isCheckedLocal)
  }

  const handleOpenLink = (url: string) => {
    Linking.openURL(formatLink(url))
  }

  return (
    <View>
      <List.Item
        title={''}
        titleStyle={styles.hidden}
        description={() => (
          <View>
            {Object.keys(otherProps).map((key: string) => {
              if (
                validURL(otherProps[key as keyof typeof otherProps] as string)
              ) {
                return (
                  <Text
                    onPress={() =>
                      handleOpenLink(
                        otherProps[key as keyof typeof otherProps] as string,
                      )
                    }
                    style={[Fonts.textRegular, Fonts.textURL]}
                  >
                    {otherProps[key as keyof typeof otherProps]}
                  </Text>
                )
              }

              return (
                <Text style={Fonts.textRegular}>
                  {otherProps[key as keyof typeof otherProps]}
                </Text>
              )
            })}
          </View>
        )}
        onPress={() => {
          if (onPress) {
            onPress(index)
          }
          handleOnPressCheckbox()
        }}
        left={props => (
          <Checkbox.Item
            {...props}
            color={Colors.primary}
            uncheckedColor={Colors.primary}
            label=""
            status={isCheckedLocal ? 'checked' : 'unchecked'}
          />
        )}
        hasTVPreferredFocus={false}
        tvParallaxProperties={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
})

FlatListItem.defaultProps = {
  onPress: () => {},
}

export default FlatListItem
