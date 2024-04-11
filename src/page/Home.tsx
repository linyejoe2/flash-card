import React from 'react'
import { View } from 'react-native'
import type { NavigationProp, ParamListBase } from '@react-navigation/native'
import { IconButton, List } from 'react-native-paper'
import { theme } from '../Theme'

type Props = {
  navigation: NavigationProp<ParamListBase>
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, margin: 20, marginTop: 0 }}>
      <List.Section style={{ alignSelf: 'flex-start', width: '100%' }}>
        {/* <List.Subheader>Some ˇtitle</List.Subheader> */}
        <List.Item
          titleStyle={{ color: theme.text.main }}
          style={{ borderStyle: 'solid', borderColor: theme.mainLight, borderBottomWidth: 1 }}
          title="First Item" left={() => <List.Icon icon="folder" />}
          onPress={() => { navigation.navigate('Card') }}
        />
        <List.Item
          title="Second Item"
          titleStyle={{ color: theme.text.main }}
          left={() => <List.Icon color={theme.main} icon="folder" />}
        />
      </List.Section>

      <IconButton
        icon="plus"
        mode='contained'
        iconColor={theme.text.main}
        size={30}
        onPress={() => {
          alert('This is a button!')
        }}
        style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: theme.mainLight }}
      // style={{ alignSelf: 'flex-end' }}
      />
    </View>
  )
}

export default Home
