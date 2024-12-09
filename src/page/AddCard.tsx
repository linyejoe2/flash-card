import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { addCard, type TCard } from '../cardSlice'
import { type NavigationProp, type ParamListBase } from '@react-navigation/native'

type Props = {
  navigation: NavigationProp<ParamListBase>
}

const AddCard: React.FC<Props> = ({ navigation }) => {
  const [newCard, setNewCard] = useState({
    question: '',
    additional: '',
    answer: '',
    description: ''
  })
  const dispatch = useDispatch()

  const handleAddCard = async () => {
    try {
      const response = await fetch('https://api.linyejoe2.site/flash-card/card/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCard)
      })
      const data = await response.json()
      dispatch(addCard(data as TCard))
      navigation.goBack()
    } catch (error) {
      console.error('Failed to add card:', error)
    }
  }

  return (
    <View style={{ margin: 20 }}>
      <TextInput
        value={newCard.question}
        onChangeText={(text) => setNewCard({ ...newCard, question: text })}
        placeholder="Question"
      />
      <TextInput
        value={newCard.additional}
        onChangeText={(text) => setNewCard({ ...newCard, additional: text })}
        placeholder="Additional"
      />
      <TextInput
        value={newCard.answer}
        onChangeText={(text) => setNewCard({ ...newCard, answer: text })}
        placeholder="Answer"
      />
      <TextInput
        value={newCard.description}
        onChangeText={(text) => setNewCard({ ...newCard, description: text })}
        placeholder="Description"
      />

      <Button title="Add Card" onPress={handleAddCard} />
    </View>
  )
}

export default AddCard
