import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
  label?: string;
  renderInput: () => JSX.Element;
}

export const FormField = (props: Props) => {
  const {label, renderInput} = props;

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}
      <View>
        {renderInput()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "normal",
    color: "#726E6C",
    marginBottom: 4
  },
});
