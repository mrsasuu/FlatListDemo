import React, { useState, FC, ReactElement } from 'react'
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'
import { List } from 'react-native-paper'
import { ItemProps } from '@/Models/Item'

interface FlatListProps {
  data: ItemProps[]
  rendererFunction: (item: { item: ItemProps }) => ReactElement
}

const FlatListComponent: FC<FlatListProps> = ({ data, rendererFunction }) => {
  const pageSize = 5

  const [listData, setListData] = useState<ItemProps[]>(data.slice(0, 10))

  const loadMoreData = (): void => {
    setListData(
      [...listData].concat(
        data.slice(listData.length, listData.length + pageSize),
      ),
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <List.Section title="Info">
        <FlatList
          data={listData}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={rendererFunction}
          removeClippedSubviews={true}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={0.1}
          onEndReached={loadMoreData}
          keyExtractor={item => item.id.toString()}
        />
      </List.Section>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default FlatListComponent
