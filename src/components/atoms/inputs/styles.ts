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
    inputWithIconContainer: {
      ...theme.align.flexRowCenter,
      marginTop: 36,
      paddingVertical: 15,
      paddingLeft: 33,
      paddingRight: 25,
      height: 60,
      borderRadius: 3,
      backgroundColor: theme.color.background04,
    },
    icon: {
      color: theme.color.primary,
    },
    multilineInput: {
      paddingTop: 17,
      paddingBottom: 17,
      paddingHorizontal: 28,
      flex: 0,
      height: 140,
      borderWidth: 1,
      borderColor: theme.color.font02,
      color: theme.color.primary,
    },
  });
};

export default createStyles;
