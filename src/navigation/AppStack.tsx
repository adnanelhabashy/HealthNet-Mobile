import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen';
import AppLayout from '../components/AppLayout'

export type AppStackParamList = {
  Home: undefined
  Details: { itemId: string }
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home">
        {props => (
          <AppLayout>
            <HomeScreen />
          </AppLayout>
        )}
      </Stack.Screen>
      <Stack.Screen name="Details">
        {props => (
          <AppLayout>
            <DetailsScreen {...props} />
          </AppLayout>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
