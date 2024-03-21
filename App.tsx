import { StatusBar } from 'expo-status-bar'
import type { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'

/**
 *
 * @return {ReactElement<View>}
 */
export default function App(): ReactElement<View> {
  return (
    <View style={styles.container} testID='main-view'>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
