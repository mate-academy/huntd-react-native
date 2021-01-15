import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

interface Props {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

export const InputEmail = (props: Props) => {
  const {placeholder, value, setValue} = props;

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.emailInput}
        keyboardType="email-address"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  emailInput: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D1CCC9',
  }
})
