import { useCallback } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import DefaultAvatar from '@image/default_avatar.png';
import SelfieAddIcon from '@svg/add_selfie.svg';
// * types
import { VideoIntroSignupProps } from '@models/navigation';

const VideoIntro = (props: VideoIntroSignupProps) => {
  const onBack = useCallback(() => {
    props.navigation.navigate('VideoIntro', {
      parentNavigation: props.route.params.parentNavigation,
    });
  }, [props]);

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.8} style={{}}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Welcome Alexis!</Text>
        <View style={styles.selfieContainer}>
          <Image source={DefaultAvatar} style={styles.selfieImage} />
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.9}
            style={styles.addSelfieBtn}>
            <SelfieAddIcon width={40} height={40} />
          </TouchableOpacity>
        </View>
        <Text style={styles.instructionLabel}>You're almost there</Text>
        <Text style={styles.instructionDesc}>
          Take a minute to video introduce yourself and upload.
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={styles.btnFinish}>
          <Text style={styles.btnFinishText}>Finish</Text>
        </TouchableOpacity>
        <Text style={styles.captionText}>
          Note: This is a mandatory step in the process of verification
        </Text>
      </View>
    </View>
  );
};

export default VideoIntro;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexCol,
      flex: 1,
      backgroundColor: theme.color.secondary,
    },
    headerBar: {
      paddingHorizontal: 52,
    },
    headerText: {
      ...theme.font.label,
      color: theme.color.primary,
    },
    contentContainer: {
      ...theme.spacing.container,
      ...theme.align.flexColCenter,
    },
    label: {
      ...theme.font.label,
      color: theme.color.primary,
    },
    selfieContainer: {
      marginTop: 32,
      width: 168,
      height: 168,
      //   borderWidth: 1,
      //   borderColor: theme.color.primary,
      //   borderRadius: 84,
      //   overflow: 'hidden',
    },
    selfieImage: {
      width: '100%',
      height: '100%',
    },
    addSelfieBtn: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    instructionLabel: {
      ...theme.font.label,
      marginTop: 50,
      color: theme.color.primary,
    },
    instructionDesc: {
      ...theme.font.normal,
      marginTop: 5,
      color: theme.color.primary,
      textAlign: 'center',
    },
    btnFinish: {
      ...theme.spacing.button,
      ...theme.box.button,
      ...theme.align.flexCenter,
      marginTop: 20,
      width: 131,
      backgroundColor: theme.color.backgroundPrimary,
    },
    btnFinishText: {
      ...theme.font.label,
      color: theme.color.secondary,
    },
    captionText: {
      ...theme.font.captionLight,
      ...theme.align.flexCenter,
      marginTop: 10,
      color: theme.color.primary,
      textAlign: 'center',
    },
  });
};
