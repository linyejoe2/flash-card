import React from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: '操你ㄇ' }
  // Add more items as needed
]

const { width: screenWidth } = Dimensions.get('window')

type ItemProps = { title: string }

const Item = ({ title }: ItemProps) => (
  <View style={[styles.item, { width: screenWidth }]}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const Home = () => {
  const renderItem = ({ item }: { item: ItemProps }) => (
    <Item title={item.title} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff'
  },
  title: {
    fontSize: 32
  }
})

export default Home
