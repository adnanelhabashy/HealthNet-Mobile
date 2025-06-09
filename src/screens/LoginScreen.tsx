// src/screens/LoginScreen.tsx
import React, {useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from './LoginScreen.styles'; // ← Import the styles
import {useTranslation} from 'react-i18next'; // ← Import the hook
import RNRestart from 'react-native-restart';
import {I18nManager} from 'react-native';

export default function LoginScreen() {
  const {signIn} = useContext(AuthContext);

  const {t, i18n} = useTranslation(); // ← Initialize the hook

  const toggleLanguage = async () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    await i18n.changeLanguage(newLang);
    I18nManager.forceRTL(newLang === 'ar');
    RNRestart.Restart();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      

      {/* App Icon/Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <View style={styles.logoPlusHorizontal} />
          <View style={styles.logoPlusVertical} />
        </View>
      </View>

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to HealthNet</Text>
      <Text style={styles.subtitle}>Your trusted health partner.</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#8e8e93"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8e8e93"
        secureTextEntry
      />

      {/* Primary Button */}
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Secondary Action */}
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.languageToggleButton}
        onPress={toggleLanguage}>
        <Text style={styles.languageToggleButtonText}>
          {i18n.language === 'en' ? 'العربية' : 'English'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
