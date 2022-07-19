import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, connect, useSelector } from 'react-redux';
import { logout } from '@/actions/UserActions';
import {
  increaseCountAction,
  decreaseCountAction,
  resetCountAction,
} from '@/actions/counterAction';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';
import { typography } from '@/theme';
import { getCounter } from '@/selectors/CounterSelectors';
import { UserContext } from '@/context/UserContext';

export function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const contextObjc = useContext(UserContext);
  const counter = useSelector(getCounter);

  const logoutUser = () => {
    dispatch(logout());
  };

  const increaseCount = () => {
    dispatch(increaseCountAction(counter.count));
  };
  const decreaseCount = () => {
    dispatch(decreaseCountAction(counter.count));
  };

  const resetCount = () => {
    console.log('resetCountAction  --- ');
    dispatch(resetCountAction());
  };

  console.log('counter ==>  ', counter.count);
  console.log('contextObjc ==>  ', contextObjc);

  return (
    <View style={styles.container}>
      <Text style={styles.counterTextTitle}>Counter Now At</Text>
      <Text style={styles.counterText}>Count: {counter.count}</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={decreaseCount}
          style={styles.counterButton}
        >
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={increaseCount}
          style={styles.counterButton}
        >
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={resetCount}
        style={styles.counterButton}
      >
        <Text style={styles.counterButtonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
}

// return (
//     <View style={styles.container}>
//         <Text style={[typography.title, styles.title, { color: colors.text }]}>
//             {strings.profile.message}
//         </Text>
//         <Button title={strings.profile.logout} onPress={logoutUser} />
//     </View>
// );
