import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import 'expo-dev-client'

import MainView from './src/views/MainView'
import CalendarView from './src/views/CalendarView'
import OptionsView from './src/views/OptionsView'

import { connectToDevTools } from 'react-devtools-core'

if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8097,
  })
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MainView' component={MainView} />
          <Stack.Screen name='CalendarView' component={CalendarView} />
          <Stack.Screen name='OptionsView' component={OptionsView} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
