import { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// * custom components
import VideoRecorder from 'src/containers/video/Recorder';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const VideoRecord = (props: any) => {
  const onBack = useCallback(() => {
    props.navigation.goBack();
  }, [props.navigation]);

  const styles = useThemeAwareObject(createStyles);
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.85}
          style={styles.backBtn}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.85}
          style={styles.uploadBtn}>
          <Text style={styles.uploadBtnText}>Upload</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cameraContainer}>
        <VideoRecorder />
      </View>
    </View>
  );
};

export default VideoRecord;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    headerContainer: {
      flex: 0,
      marginBottom: 22,
      paddingHorizontal: 34,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    backBtn: {
      flexDirection: 'row',
    },
    uploadBtn: {},
    uploadBtnText: {
      color: theme.color.link,
    },
    cameraContainer: {
      flex: 1,
      marginHorizontal: 45,
    },
  });
};
