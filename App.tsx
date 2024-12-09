import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import Home from './src/page/Home'
import Card from './src/page/Card'
import store from './src/store'
import { navigationTheme } from './src/Theme'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import AddCard from 'src/page/AddCard'
import { type RootStackParamList } from 'src/type'
import { AppRegistry } from 'react-native'
import { expo } from './app.json'

AppRegistry.registerComponent(expo.name, () => NavigationBar)

const Stack = createStackNavigator<RootStackParamList>()
// function NavigationBar() {
//   return (
//     <PaperProvider>
//       <Home />
//     </PaperProvider>
//   )
// }
function NavigationBar() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Card" component={Card} />
            <Stack.Screen name="AddCard" component={AddCard} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

export default NavigationBar
