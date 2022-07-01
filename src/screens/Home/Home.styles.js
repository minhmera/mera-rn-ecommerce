import { StyleSheet } from 'react-native';
import { COLOURS, Items } from '../../mocks/database/Database';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
  },
  titleText: {
    fontSize: 26,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  titleText2: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
    letterSpacing: 1,
    lineHeight: 24,
  },
  categoryText: {
    fontSize: 18,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  categoryNumber: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: 10,
  },
  seeAllText: {
    fontSize: 14,
    color: COLOURS.blue,
    fontWeight: '400',
  },

  itemDetail: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  discountView: {
    position: 'absolute',
    width: '20%',
    height: '24%',
    backgroundColor: COLOURS.green,
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountText: {
    fontSize: 12,
    color: COLOURS.white,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  productImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: '600',
    marginBottom: 2,
  },
});
