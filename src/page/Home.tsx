import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, List } from 'react-native-paper'
import type { NavigationProp, ParamListBase } from '@react-navigation/native'
import { type RootState, type AppDispatch } from '../store'
import { setCardList, shuffleCards, type TCard } from '../cardSlice'
import { theme } from '../Theme'

type Props = {
  navigation: NavigationProp<ParamListBase>
}

const Home: React.FC<Props> = ({ navigation }) => {
  const dispatch: AppDispatch = useDispatch()
  const cardList = useSelector((state: RootState) => state.cards.cardList)

  // Fetch cards from API
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://api.linyejoe2.site/flash-card/card/get')
        const data = (await response.json()) as TCard[]
        dispatch(setCardList(data))
      } catch (error) {
        console.error('Failed to fetch cards:', error)
      }
    }

    void fetchCards()
  }, [dispatch])

  return (
    <View style={{ flex: 1, margin: 20, marginTop: 0 }}>
      <List.Section style={{ alignSelf: 'flex-start', width: '100%' }}>
        {cardList.map(card => (
          <List.Item
            key={card.card_id}
            titleStyle={{ color: theme.text.main }}
            style={{ borderStyle: 'solid', borderColor: theme.mainLight, borderBottomWidth: 1 }}
            title={card.question}
            description={card.additional}
            left={() => <List.Icon icon="folder" />}
            onPress={() => { navigation.navigate('Card', { card }) }}
          />
        ))}
      </List.Section>

      <IconButton
        icon="plus"
        mode='contained'
        iconColor={theme.text.main}
        size={30}
        onPress={() => { navigation.navigate('AddCard') }}
        style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: theme.mainLight }}
      />

      <IconButton
        icon="play"
        mode='contained'
        iconColor={theme.text.main}
        size={30}
        onPress={() => { dispatch(shuffleCards()) }}
        style={{ position: 'absolute', bottom: 0, right: 60, backgroundColor: theme.mainLight }}
      />
    </View>
  )
}

export default Home
