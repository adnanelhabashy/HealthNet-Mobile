import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

type Props = { children: ReactNode };
export default function AppLayout({ children }: Props) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Text style={styles.title}>{t('header.dashboard')}</Text>
      </View>

      <View style={styles.content}>{children}</View>

      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <Text style={styles.footerText}>{t('footer.copyright')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingBottom: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#8e8e93',
  },
});