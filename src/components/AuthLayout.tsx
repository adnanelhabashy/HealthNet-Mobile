import React, { ReactNode } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

type Props = { children: ReactNode }
export default function AuthLayout({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  content: { margin: 24, padding: 16, backgroundColor: '#fff', borderRadius: 8 },
})
