import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { IconButton } from 'react-native-paper'
import { updateCard } from '../cardSlice'
import { theme } from '../Theme'
import { type StackScreenProps } from '@react-navigation/stack'
import { type RootStackParamList } from 'src/type'

type Props = StackScreenProps<RootStackParamList, 'Card'>

const styles = StyleSheet.create({
  textInput: {
    height: 70,
    // borderWidth: ,
    // padding: 25,
    fontSize: 18,
    paddingHorizontal: 15,
    color: theme.text.main,
    borderStyle: 'solid',
    borderColor: theme.mainLight,
    borderBottomWidth: 1
  }
})

const Card: React.FC<Props> = ({ navigation, route }) => {
  const { card } = route.params
  const [editedCard, setEditedCard] = useState(card)
  const [descriptionHeight, setDescriptionHeight] = useState(70)
  const dispatch = useDispatch()

  const handleSave = async () => {
    try {
      const response = await fetch(`https://api.linyejoe2.site/flash-card/card/${card.card_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedCard)
      })
      if (response.ok) {
        dispatch(updateCard(editedCard))
        navigation.goBack()
      }
    } catch (error) {
      console.error('Failed to update card:', error)
    }
  }

  return (
    <View
      style={{
        // backgroundColor: "#ffffff00"
        // marginTop: 12
      }}
    >
      <TextInput
        // style={styles.input}
        style={[styles.textInput]}
        value={editedCard.question}
        onChangeText={(text) => setEditedCard({ ...editedCard, question: text })}
        placeholder="Question"
      // showSoftInputOnFocus={false}
      // selectTextOnFocus={false}
      />
      <TextInput
        style={styles.textInput}
        value={editedCard.additional}
        onChangeText={(text) => setEditedCard({ ...editedCard, additional: text })}
        placeholder="Additional"
      />
      <TextInput
        style={{ ...styles.textInput, height: 140 }}
        value={editedCard.answer}
        onChangeText={(text) => setEditedCard({ ...editedCard, answer: text })}
        onContentSizeChange={(event) => {
          setDescriptionHeight(event.nativeEvent.contentSize.height)
        }}
        placeholder="Answer"
        multiline={true}
      />
      <TextInput
        style={{ ...styles.textInput, ...{ height: Math.max(70, descriptionHeight + 40), textAlignVertical: 'top', paddingTop: 20 } }}
        value={editedCard.description}
        onChangeText={(text) => setEditedCard({ ...editedCard, description: text })}
        onContentSizeChange={(event) => {
          setDescriptionHeight(event.nativeEvent.contentSize.height)
        }}
        placeholder="Description"
        multiline={true}
      />

      <IconButton
        icon="pencil"
        size={30}
        iconColor={theme.text.main}
        onPress={handleSave}
        style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: theme.mainLight }}
      />
    </View>
  )
}

export default Card
