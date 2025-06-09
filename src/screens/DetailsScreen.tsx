// src/screens/DetailsScreen.tsx
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../navigation/AppStack'

type Props = NativeStackScreenProps<AppStackParamList, 'Details'>

export default function DetailsScreen({ route, navigation }: Props) {
  const { itemId } = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details for item: {itemId}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, marginBottom: 12 },
})
