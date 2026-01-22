import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  container: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
avatar: {
  width: 120,
  height: 120,
  borderRadius: 60,
},
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: '#666',
  },
  bio: {
    fontStyle: 'italic',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: Platform.OS === 'ios' ? 12 : 8,
    padding: 10,
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btnPrimary: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  btnSecondary: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#EEE',
  },
  btnText: {
    color: '#FFF',
    fontWeight: '600',
  },
  logoutBtn: {
    marginTop: 10,
    alignItems: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  loading: {
    alignItems: 'center',
    marginVertical: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
