import type { Theme } from '@react-navigation/native'
// import { StyleSheet } from "react-native"

// export class Theme {
//   public main: string = '#622e87'
//   public mainLight: string = '#8e24aa'

//   public background = {
//     main: '#0e021d',
//     card: '#2a1742'
//   }

//   public text = {
//     main: '#fff',
//     hiLight: '#ba68c8'
//   }
// }

export const theme = {
  main: '#622e87',
  mainLight: '#8e24aa',
  background: {
    main: '#0e021d',
    card: '#2a1742'
  },
  text: {
    main: '#d3d3d3',
    hiLight: '#ba68c8'
  }
}

export const navigationTheme: Theme = {
  dark: true,
  colors: {
    primary: theme.main,
    background: theme.background.main,
    card: theme.background.card,
    text: theme.text.main,
    border: theme.mainLight,
    notification: theme.main
  }
}

// export const Style = StyleSheet.create({

// })
