import { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
// * components
import MatchingAnim from 'src/containers/verification/MatchingAnim';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

import { VerificationProps } from '@models/navigation';

const VerificationScreen = (props: VerificationProps) => {
  const [animStart, setAnimStart] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setAnimStart(true);
    }, []),
  );

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Start to Connect!</Text>
      <View style={styles.photosContainer}>
        <MatchingAnim
          isStart={animStart}
          onFinish={() => {
            setAnimStart(false);
          }}
        />
      </View>
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
      backgroundColor: theme.color.secondary,
    },
    labelText: {
      ...theme.font.label3Bold,
      color: theme.color.primary,
    },
    photosContainer: {
      marginTop: 3,
      flex: 1,
      width: '100%',
      borderWidth: 3,
      borderColor: theme.color.borderPrimary,
    },
  });
};
