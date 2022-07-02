import { StyleSheet } from 'react-native';
import screenSize from '../../constants/Layout';
import { spacing } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  counterTextTitle: {
    fontSize: 24,
  },
  counterText: {
    fontSize: 50,
  },
  counterButtonView: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenSize.window.width / 2,
  },
  counterButton: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  counterButtonText: {
    fontSize: 60,
  },
});
