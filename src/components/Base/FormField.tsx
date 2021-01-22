import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../../controllers/theme/theme.constants';

interface Props {
  label?: string;
  renderInput: () => any;
}

export const FormField = (props: Props) => {
  const { label, renderInput } = props;

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
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    color: theme.color.gray,
    marginBottom: 4
  },
});
