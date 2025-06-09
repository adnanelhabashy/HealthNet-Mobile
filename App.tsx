// App.tsx
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import {AuthProvider, AuthContext} from './src/context/AuthContext';
import {SafeAreaProvider} from 'react-native-safe-area-context'; // ← Import
import './src/i18n'; // ← Add this import at the top
import { I18nManager } from 'react-native';

function RootNavigator() {
  const {isLoggedIn} = useContext(AuthContext);
  return isLoggedIn ? <AppStack /> : <AuthStack />;
}

export default function App() {
  //I18nManager.allowRTL(true);
  //I18nManager.forceRTL(true); // Set to 'false' to test LTR

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
