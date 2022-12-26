import { StyleSheet } from 'react-native';

import { Theme } from '@theme/Theme.interface';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    walletHeaderContainer: {
      ...theme.align.flexRowCenter,
      paddingVertical: 20,
      paddingHorizontal: 24,
      borderBottomWidth: 1,
      borderColor: theme.color.borderPrimary,
    },
    walletHeaderText: {
      ...theme.font.label1,
      flex: 1,
      color: theme.color.primary,
      textAlign: 'center',
    },
    walletHeaderEmptySection: {
      width: 24,
    },
    icon: {
      color: theme.color.primary,
    },
  });
};

export default createStyles;
