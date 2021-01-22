import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { SignIn } from './src/pages/SignIn';
import { theme } from './src/controllers/theme/theme.constants';

export default function App() {
  return (
    <View style={styles.main}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.color.background,
  },
});
