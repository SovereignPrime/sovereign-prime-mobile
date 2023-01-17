import { StyleSheet, Text, View } from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

import { VerificationProps } from '@models/navigation';

const VerificationScreen = (props: VerificationProps) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Start to Connect!</Text>
      <View style={styles.photosContainer}></View>
    </View>
  );
};

export default VerificationScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexColLeft,
      flex: 1,
      paddingVertical: 57,
      paddingHorizontal: 31,
    },
    labelText: {
      ...theme.font.label3Bold,
      color: theme.color.primary,
    },
    photosContainer: {
      marginTop: 3,
      flex: 1,
      borderWidth: 3,
      borderColor: theme.color.borderPrimary,
    },
  });
};
