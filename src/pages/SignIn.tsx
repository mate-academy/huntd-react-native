import React, { useState } from 'react';
import {
  Alert,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { IBMPlexMono_400Regular, IBMPlexMono_700Bold, useFonts } from '@expo-google-fonts/ibm-plex-mono';
import { FormField } from '../components/Base/FormField';
import { InputEmail } from '../components/Base/InputEmail';
import { InputPassword } from '../components/Base/InputPassword';
import { SocialButton, SocialButtonsType } from '../components/SocialButton';
import { theme } from '../controllers/theme/theme.constants';

export const SignIn = () => {
  useFonts({
    IBMPlexMono_400Regular,
    IBMPlexMono_700Bold,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = () => {
    Alert.alert('Huntd Login', `email: ${email},\n password: ${password}`);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.header}>Sign in to your account</Text>
      <View style={styles.inputs}>
        <FormField
          label="Email"
          renderInput={() => (
            <InputEmail
              value={email}
              setValue={setEmail}
              placeholder="Email"
            />
          )}
        />
        <FormField
          label="Password"
          renderInput={() => (
            <InputPassword
              value={password}
              setValue={setPassword}
              placeholder="Password"
            />
          )}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={submitHandler}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginBottom: 48 }}>
        <Text style={[styles.text, styles.color]}>
          Forgot password
        </Text>
      </TouchableOpacity>
      <Text style={[styles.text, { textAlign: 'center', marginBottom: 16 }]}>Sign in with</Text>
      <View style={styles.socialButtons}>
        <SocialButton type={SocialButtonsType.Google} />
        <SocialButton type={SocialButtonsType.Linkedin} />
        <SocialButton type={SocialButtonsType.Github} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 52,
    paddingHorizontal: 20,
  },
  inputs: {
    marginBottom: 24,
  },
  header: {
    fontFamily: 'IBMPlexMono_700Bold',
    color: theme.color.citrus,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.citrus,
    borderRadius: 4,
    marginBottom: 14,
  },
  buttonText: {
    fontFamily: 'IBMPlexMono_700Bold',
    color: theme.color.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
  },
  text: {
    fontFamily: 'IBMPlexMono_400Regular',
  },
  color: {
    color: theme.color.citrus,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
