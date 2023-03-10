import { useCallback } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// * hooks
import { useAuth } from '@theme/Auth';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import HamburgerMenuIcon from '@svg/hamburger.svg';
import EditIcon from '@svg/edit.svg';
// * typs
import { ProfileProps } from '@models/navigation';
// * mockup
import Avatar01 from '@image/mockup/avatar01.png';
import { mockupMarketItemListForProfile } from '@utils/mockup';

const ProfileScreen = (props: ProfileProps) => {
  const { signOut } = useAuth();

  const onVerification = useCallback(() => {
    props.navigation.navigate('Verification');
  }, [props]);

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <HamburgerMenuIcon style={{ flex: 0 }} />
        <Text style={styles.headerTitle}>My Profile</Text>
        <EditIcon style={styles.headerEditIcon} />
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
        nestedScrollEnabled={true}>
        <Image source={Avatar01} style={styles.avatarImage} />
        <Text style={[styles.label, styles.marketLabel]}>My Marketplace</Text>
        <ScrollView
          horizontal={true}
          style={styles.marketItemList}
          contentContainerStyle={{}}>
          {mockupMarketItemListForProfile.map((item: any) => (
            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={0.8}
              style={styles.marketItem}
              key={`market-item-for-profile-${item.id}`}>
              <Image source={item.image} style={styles.marketItemImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={[styles.label, styles.labelSpace]}>Wallet</Text>
        <View style={styles.bottomLine} />
        <Text style={[styles.label, styles.labelSpace]}>Payment</Text>
        <View style={styles.bottomLine} />
        <TouchableOpacity
          onPress={onVerification}
          activeOpacity={0.8}
          style={[
            styles.labelSpace,
            {
              width: '100%',
            },
          ]}>
          <Text style={[styles.label]}>Verification</Text>
        </TouchableOpacity>
        <View style={styles.bottomLine} />
        <Text style={[styles.label, styles.labelSpace]}>
          Privacy & Settings
        </Text>
        <View style={styles.bottomLine} />
        <TouchableOpacity
          onPress={signOut}
          activeOpacity={0.8}
          style={[
            styles.labelSpace,
            {
              width: '100%',
            },
          ]}>
          <Text style={[styles.label]}>Log Out</Text>
        </TouchableOpacity>
        <View style={styles.bottomLine} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.secondary,
    },
    headerBar: {
      ...theme.align.flexRowCenter,
      paddingVertical: 9,
      paddingLeft: 41,
      paddingRight: 23,
    },
    headerTitle: {
      ...theme.font.normalBold,
      flex: 1,
      color: theme.color.primary,
      textAlign: 'center',
    },
    headerEditIcon: {
      flex: 0,
      width: 18,
      height: 18,
      color: theme.color.font01,
    },
    scrollContainer: {
      flex: 1,
      marginHorizontal: 8,
      backgroundColor: theme.color.borderPrimary,
    },
    contentContainer: {
      ...theme.align.flexColCenter,
      paddingVertical: 17,
      paddingHorizontal: 15,
    },
    avatarImage: {
      width: 85,
      height: 85,
      borderRadius: 43,
      resizeMode: 'stretch',
    },
    label: {
      ...theme.font.normalBold,
      width: '100%',
      color: theme.color.primary,
    },
    marketLabel: {
      marginTop: 7,
      marginBottom: 15,
    },
    marketItemList: {
      flexGrow: 0,
    },
    marketItem: {
      marginRight: 10,
      width: 90,
      height: 152,
      borderRadius: 8,
    },
    marketItemImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'stretch',
    },
    labelSpace: {
      marginTop: 37,
      marginBottom: 28,
    },
    bottomLine: {
      height: 0,
      width: '100%',
      borderBottomWidth: 1,
      borderColor: theme.color.primary,
    },
  });
};
