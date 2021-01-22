import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconGoogle } from './Icons/IconGoogle';
import { IconLinkedin } from './Icons/IconLinkedin';
import { IconGithub } from './Icons/IconGithub';
import { theme } from '../controllers/theme/theme.constants';

export enum SocialButtonsType {
  Google = 'GOOGLE',
  Linkedin = 'LINKEDIN',
  Github = 'GITHUB'
}

interface Props {
  type: SocialButtonsType;
}

const getSocialIcon = (type: SocialButtonsType) => {
  switch (type) {
    case SocialButtonsType.Google: return IconGoogle;
    case SocialButtonsType.Linkedin: return IconLinkedin;
    case SocialButtonsType.Github: return IconGithub;
    default: return View;
  }
};

export const SocialButton = (props: Props) => {
  const { type } = props;
  const Icon = getSocialIcon(type);

  return (
    <TouchableOpacity style={styles.socialButton}>
      <Icon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    paddingVertical: 12,
    paddingHorizontal: 42,
    backgroundColor: theme.color.white,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.color.lightGray,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
