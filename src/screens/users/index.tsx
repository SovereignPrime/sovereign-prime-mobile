import { useCallback, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
// * styles
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { Theme } from '@theme/Theme.interface';
// * components
import { MarketDetailItem } from '@components/atoms/marketplace/Item';
import ProfileMenu from '@components/atoms/popups/ProfileMenu';
import ContactList from 'src/containers/contact/List';
// * assets
import BackIcon from '@svg/back.svg';
import GenderIcon from '@svg/gender.svg';
import LocationIcon from '@svg/location.svg';
import JobIcon from '@svg/job.svg';
import ConnectionIcon from '@svg/connection.svg';
// * mockup
import Avatar04 from '@image/mockup/avatar04.png';
import { mockupUserMarketUpdates } from '@utils/mockup';

/**
 *
 *
 */
const UsersScreen = () => {
  const [screenIndex, setScreenIndex] = useState<number>(0);
  useFocusEffect(
    useCallback(() => {
      setScreenIndex(0);
    }, []),
  );

  const styles = useThemeAwareObject(createStyles);
  return screenIndex === 1 ? (
    <ContactList />
  ) : (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <BackIcon width={20} height={30} style={styles.backIcon} />
        <ProfileMenu />
      </View>
      <View style={styles.userInfoContainer}>
        <Image source={Avatar04} style={styles.avatarImage} />
        <Text style={styles.userName}>Brooke Weaver</Text>
        <Text style={styles.walletAddress}>
          Wallet ID: fghjch3567d3ghn6390nm20
        </Text>
        <View style={styles.detailInfoRow}>
          <View style={styles.detailInfo}>
            <GenderIcon width={20} height={20} style={styles.detailInfoIcon} />
            <Text numberOfLines={1} style={styles.detailInfoText}>
              Female
            </Text>
          </View>
          <View style={[styles.detailInfo, styles.detailInfoMargin]}>
            <LocationIcon
              width={20}
              height={20}
              style={styles.detailInfoIcon}
            />
            <Text numberOfLines={1} style={styles.detailInfoText}>
              Seattle, WA
            </Text>
          </View>
          <View style={[styles.detailInfo, styles.detailInfoMargin]}>
            <JobIcon width={20} height={20} style={styles.detailInfoIcon} />
            <Text numberOfLines={1} style={styles.detailInfoText}>
              Web Developer
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setScreenIndex(1);
            }}
            activeOpacity={0.8}
            style={[styles.detailInfo, styles.detailInfoMargin]}>
            <ConnectionIcon
              width={20}
              height={20}
              style={styles.detailInfoIcon}
            />
            <Text numberOfLines={1} style={styles.detailInfoText}>
              25
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.8}
            style={[styles.buttonSmall]}>
            <Text style={styles.buttonSmallText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.8}
            style={[styles.buttonSmall, styles.buttonSmallMargin]}>
            <Text style={styles.buttonSmallText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
            style={[styles.buttonSmall, styles.buttonSmallMargin]}>
            <Text style={styles.buttonSmallText}>Payment</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.marketSectionTitle}>Marketplace Updates</Text>
        <View style={styles.marketSectionList}>
          {mockupUserMarketUpdates.map(item => (
            <MarketDetailItem
              {...item}
              key={`market-update-detail-item-${item.id}`}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default UsersScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.background01,
    },
    headerBar: {
      ...theme.align.flexRowBetween,
      paddingVertical: 9,
      paddingHorizontal: 20,
      width: '100%',
    },
    backIcon: {
      color: theme.color.primary,
    },
    avatarImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    userInfoContainer: {
      ...theme.align.flexColCenter,
      paddingHorizontal: 21,
    },
    userName: {
      ...theme.font.labelMedium,
      marginTop: 17,
      color: theme.color.primary,
    },
    walletAddress: {
      ...theme.font.normal,
      marginTop: 20,
      color: theme.color.primary,
    },
    detailInfoRow: {
      ...theme.align.flexRowBetween,
      marginTop: 20,
      width: '100%',
    },
    detailInfo: {
      ...theme.align.flexRowBetween,
      flex: 0,
    },
    detailInfoText: {
      ...theme.font.captionLight,
      marginLeft: 5,
      color: theme.color.primary,
    },
    detailInfoIcon: {
      color: theme.color.primary,
    },
    detailInfoMargin: {
      marginLeft: 10,
    },
    btnRow: {
      ...theme.align.flexRowCenter,
      marginTop: 53,
      width: '100%',
    },
    buttonSmall: {
      ...theme.box.buttonSmall,
      ...theme.align.flexCenter,
      flex: 1,
    },
    buttonSmallMargin: {
      marginLeft: 21,
    },
    buttonSmallText: {
      ...theme.font.normalBold,
      color: theme.color.primary,
    },
    marketSectionTitle: {
      ...theme.font.normalBold,
      marginTop: 42,
      marginBottom: 17,
      width: '100%',
      color: theme.color.primary,
    },
    marketSectionList: {
      width: '100%',
    },
  });
};
