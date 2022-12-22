import { StyleSheet } from 'react-native';

import { Theme } from '@theme/Theme.interface';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    inputWithLabel: {
      ...theme.align.flexColLeft,
      width: '100%',
    },
    labelText: {
      ...theme.font.label,
      marginBottom: 5,
      color: theme.color.primary,
    },
    input: {
      ...theme.box.fullWidthInput,
      ...theme.spacing.input,
      width: '100%',
      borderColor: theme.color.primary,
    },
    inputRow: {
      ...theme.align.flexRowCenter,
    },
    addon: {
      marginLeft: 15,
    },
    searchInputContainer: {
      ...theme.align.flexRowCenter,
      paddingVertical: 12,
      paddingLeft: 14,
      paddingRight: 20,
      width: '100%',
      borderWidth: 2,
      borderColor: theme.color.borderPrimary,
      backgroundColor: theme.color.secondary,
    },
    searchInput: {
      ...theme.font.normal,
      flex: 1,
    },
  });
};

export default createStyles;
