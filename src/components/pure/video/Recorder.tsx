import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import PauseIcon from '@svg/pause.svg';
import RecordIcon from '@svg/record.svg';

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
  audio: true,
  zoom: true,
});

const VideoRecorder = () => {
  const devices = useCameraDevices();

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>00:00:35</Text>
      <View style={styles.camera}>
        {devices.front ? (
          <ReanimatedCamera
            device={devices.front}
            isActive={true}
            photo={false}
            video={true}
            audio={true}
            style={StyleSheet.absoluteFill}
          />
        ) : (
          <Text
            style={{
              textAlign: 'center',
            }}>
            Camera not supported
          </Text>
        )}
      </View>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.85} style={{}}>
          <PauseIcon width={60} height={60} style={styles.toolbarBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.85} style={{}}>
          <RecordIcon width={60} height={60} style={styles.toolbarBtn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoRecorder;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    timer: {
      marginBottom: 9,
      ...theme.font.label1,
      color: theme.color.primary,
    },
    camera: {
      flex: 1,
      width: '100%',
      borderWidth: 1,
      borderColor: '#888',
    },
    toolbar: {
      flex: 0,
      width: '100%',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    toolbarBtn: {
      flex: 0,
      width: 60,
      height: 60,
      borderRadius: 30,
      overflow: 'hidden',
    },
  });
};
