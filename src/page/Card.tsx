import React from 'react'
import { View, Button } from 'react-native'
import type { NavigationProp, ParamListBase } from '@react-navigation/native'

type Props = {
  navigation: NavigationProp<ParamListBase>
}

const Card: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go back to Home"
        onPress={() => { navigation.navigate('Home') }}
      />
    </View>
  )
}

export default Card
