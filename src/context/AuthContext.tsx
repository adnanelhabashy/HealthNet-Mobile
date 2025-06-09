// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextType = {
  isLoggedIn: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  signIn: async () => {},
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      setIsLoggedIn(!!token)
    })
  }, [])

  const signIn = async () => {
    await AsyncStorage.setItem('token', 'dummy-auth-token')
    setIsLoggedIn(true)
  }

  const signOut = async () => {
    await AsyncStorage.removeItem('token')
    setIsLoggedIn(false)
  }

 return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
