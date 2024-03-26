import type { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'
import Home from './src/page/Home'

/**
 *
 * @return {ReactElement<View>}
 */
export default function App(): ReactElement<View> {
  return (
    <View style={styles.container} testID='main-view'>
      <Home />
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
