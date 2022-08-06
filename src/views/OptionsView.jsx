import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Navigation from '../components/Navigation'

export default function OptionsView({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>OptionsView</Text>
      <StatusBar style='auto' />
      <Navigation navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
