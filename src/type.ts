import { type TCard } from './cardSlice'

export type RootStackParamList = {
  Home: undefined
  Card: { card: TCard }
  AddCard: undefined
}
