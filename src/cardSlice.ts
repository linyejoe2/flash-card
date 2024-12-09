import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type TCard = {
  question: string
  additional: string
  answer: string
  description: string
  card_id: string
}

type CardsState = {
  cardList: TCard[]
}

const initialState: CardsState = {
  cardList: []
}

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardList(state, action: PayloadAction<TCard[]>) {
      state.cardList = action.payload
    },
    addCard(state, action: PayloadAction<TCard>) {
      state.cardList.push(action.payload)
    },
    updateCard(state, action: PayloadAction<TCard>) {
      const index = state.cardList.findIndex(card => card.card_id === action.payload.card_id)
      if (index !== -1) {
        state.cardList[index] = action.payload
      }
    },
    shuffleCards(state) {
      state.cardList = state.cardList.sort(() => Math.random() - 0.5)
    }
  }
})

export const { setCardList, addCard, updateCard, shuffleCards } = cardSlice.actions
export default cardSlice.reducer
