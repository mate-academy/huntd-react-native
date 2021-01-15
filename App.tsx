import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

import {SignIn} from "./src/pages/SignIn";

export default function App() {
  return (
    <View style={styles.main}>
      <SignIn />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FDFBFB',
  },
});
