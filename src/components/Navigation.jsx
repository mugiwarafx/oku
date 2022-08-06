import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Navigation({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title='Go to OptionsView'
        onPress={() => navigation.navigate('OptionsView')}
      />
      <Button
        title='Go to MainView'
        onPress={() => navigation.navigate('MainView')}
      />
      <Button
        title='Go to CalendarView'
        onPress={() => navigation.navigate('CalendarView')}
      />
      <StatusBar style='auto' />
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
