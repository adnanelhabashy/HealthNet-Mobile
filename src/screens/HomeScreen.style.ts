import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  greetingContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  greetingTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1c1c1e',
    //textAlign: 'start',
  },
  greetingSubtitle: {
    fontSize: 16,
    color: '#8e8e93',
    marginTop: 4,
    //textAlign: 'start',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  appointmentCard: {
    backgroundColor: '#007AFF',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
    opacity: 0.8,
    //textAlign: 'start',
  },
  appointmentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appointmentInfo: {
    marginStart: 16, // Use 'marginStart' for RTL support
  },
  appointmentDoctor: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    //textAlign: 'start',
  },
  appointmentTime: {
    fontSize: 15,
    color: '#fff',
    opacity: 0.9,
    marginTop: 4,
    //textAlign: 'start',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#007AFF1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3c3c43',
    textAlign: 'center',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1c1c1e',
    marginBottom: 8,
    //textAlign: 'start',
  },
  tipText: {
    fontSize: 15,
    color: '#3c3c43',
    lineHeight: 22,
    //textAlign: 'start',
  },
  signOutButton: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    padding: 14,
    backgroundColor: '#FEEBEE',
    borderRadius: 12,
    alignItems: 'center',
  },
  signOutButtonText: {
    color: '#D32F2F',
    fontWeight: '600',
    fontSize: 16,
  },
});