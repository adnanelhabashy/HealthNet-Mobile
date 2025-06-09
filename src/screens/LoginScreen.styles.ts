// src/screens/LoginScreen.styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF1A', // A very light, translucent blue
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlusHorizontal: {
    width: 24,
    height: 4,
    backgroundColor: '#007AFF',
    borderRadius: 2,
    position: 'absolute',
  },
  logoPlusVertical: {
    width: 4,
    height: 24,
    backgroundColor: '#007AFF',
    borderRadius: 2,
    position: 'absolute',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1c1c1e',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8e8e93',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#f2f2f7',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  forgotPasswordButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '500',
  },
    languageToggleButton: {
    position: 'absolute',
    top: 20,
    end: 20, // Use 'end' for RTL support
    padding: 10,
    backgroundColor: '#f2f2f7',
    borderRadius: 8,
  },
  languageToggleButtonText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});