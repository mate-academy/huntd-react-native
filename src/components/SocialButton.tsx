import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconGoogle} from "./Icons/IconGoogle";
import {IconLinkedin} from "./Icons/IconLinkedin";
import {IconGithub} from "./Icons/IconGithub";

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
  }
}

export const SocialButton = (props: Props) => {
  const Icon = getSocialIcon(props.type);

  return (
    <TouchableOpacity style={styles.socialButton}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  socialButton: {
    paddingVertical: 12,
    paddingHorizontal: 42,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D1CCC9',
    alignItems: "center",
    justifyContent: "center"
  },
});
