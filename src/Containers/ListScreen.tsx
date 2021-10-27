import React, { useCallback, useMemo } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { withTheme } from 'react-native-paper'
import { isUndefined } from 'lodash'
import { ListState, setSelectedItems } from '@/Store/List'
import { useSelector, useDispatch } from 'react-redux'
import { FlatListItem } from '@/Components'
import { createDummyDataSet } from '@/Utils/DummyFactory'
import FlatListComponent from '@/Components/FlatListComponent'
import { ItemProps } from '@/Models/Item'

const ListScreen = () => {
  const selectedListItems = useSelector(
    (state: { list: ListState }) => state.list.selectedItems,
  )
  const data = useMemo(() => JSON.parse(createDummyDataSet()), [])

  const dispatch = useDispatch()

  const handleItemClicked = useCallback(
    (index: number): void => {
      let localItemsSelected = [...selectedListItems]

      if (localItemsSelected.includes(index)) {
        localItemsSelected = localItemsSelected.filter(item => item !== index)
      } else {
        localItemsSelected.push(index)
      }
      dispatch(setSelectedItems({ selectedItems: localItemsSelected }))
    },
    [dispatch, selectedListItems],
  )

  const renderFlatListItem = useCallback(
    ({ item }: { item: ItemProps }) => {
      return (
        <FlatListItem
          key={item.id}
          index={item.id}
          onPress={() => handleItemClicked(item.id)}
          {...item}
          isChecked={
            !isUndefined(
              selectedListItems.find(selectedItem => selectedItem === item.id),
            )
          }
        />
      )
    },
    [handleItemClicked, selectedListItems],
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatListComponent data={data} rendererFunction={renderFlatListItem} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default withTheme(ListScreen)
