import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import Home from './src/page/Home'
import Card from './src/page/Card'
import { navigationTheme } from './src/Theme'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
// function NavigationBar() {
//   return (
//     <PaperProvider>
//       <Home />
//     </PaperProvider>
//   )
// }
function NavigationBar() {
  return (
    <PaperProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Card" component={Card} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default NavigationBar
