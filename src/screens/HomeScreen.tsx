import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../context/AuthContext';
import { styles } from './HomeScreen.style';

const userName = 'Alex';

export default function HomeScreen() {
  const { signOut } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingTitle}>{t('home.greeting', { name: userName })}</Text>
        <Text style={styles.greetingSubtitle}>{t('home.summary')}</Text>
      </View>

      <View style={[styles.card, styles.appointmentCard]}>
        <Text style={styles.cardTitle}>{t('home.upcomingAppointment')}</Text>
        <View style={styles.appointmentDetails}>
          <View style={styles.actionIconContainer}><Text>🗓️</Text></View>
          <View style={styles.appointmentInfo}>
            <Text style={styles.appointmentDoctor}>{t('home.appointmentWith')}</Text>
            <Text style={styles.appointmentTime}>{t('home.appointmentTime')}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}><Text>➕</Text></View>
            <Text style={styles.actionText}>{t('home.actionBook')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}><Text>📄</Text></View>
            <Text style={styles.actionText}>{t('home.actionRecords')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}><Text>🧑‍⚕️</Text></View>
            <Text style={styles.actionText}>{t('home.actionFindDoctor')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.tipTitle}>{t('home.tipTitle')}</Text>
        <Text style={styles.tipText}>{t('home.tipText')}</Text>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
        <Text style={styles.signOutButtonText}>{t('home.signOut')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}