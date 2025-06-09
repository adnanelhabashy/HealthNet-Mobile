import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import AuthLayout from '../components/AuthLayout';

export type AuthStackParamList = {
  Login: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {props => (
          <AuthLayout>
            <LoginScreen  />
          </AuthLayout>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
