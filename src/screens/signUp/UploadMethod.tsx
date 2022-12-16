import { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import CameraIcon from '@svg/camera.svg';
import FileExplorerIcon from '@svg/file_explorer.svg';
import VideoIcon from '@svg/video.svg';

const UploadMethod = (props: any) => {
  const { navigation } = props;
  // * event handlers
  const onOverlay = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const onCamera = useCallback(() => {
    navigation.navigate('VideoRecord');
  }, [navigation]);

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOverlay} style={{ flex: 1 }} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Choose your upload method</Text>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.85}
            style={styles.itemContainer}>
            <FileExplorerIcon />
            <Text style={styles.itemDesc}>File Explorer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.85}
            style={styles.itemContainer}>
            <VideoIcon />
            <Text style={styles.itemDesc}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCamera}
            activeOpacity={0.85}
            style={styles.itemContainer}>
            <CameraIcon />
            <Text style={styles.itemDesc}>Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UploadMethod;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      //   justifyContent: 'flex-end',
    },
    contentContainer: {
      flex: 0,
      bottom: 0,
      paddingTop: 30,
      paddingHorizontal: 40,
      width: '100%',
      backgroundColor: theme.color.secondary,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      marginBottom: 44,
      ...theme.font.captionLight,
      color: theme.color.primary,
      textAlign: 'center',
    },
    subContainer: {
      marginBottom: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemContainer: {
      flex: 1,
      height: 75,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemDesc: {
      ...theme.font.captionLight,
      color: theme.color.primary,
    },
  });
};
