import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * components
import NotificationList from 'src/containers/notification/List';
import VerificationList from 'src/containers/verification/List';
import MarketplaceList from 'src/containers/marketplace/List';
// * styles
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { Theme } from '@theme/Theme.interface';

const HomeScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>Notification</Text>
      <NotificationList />
      <Text style={[styles.listTitle, styles.sectionSpace]}>Verification</Text>
      <VerificationList />
      <View style={[styles.listTitleRow, styles.sectionSpace]}>
        <Text style={[styles.listTitle]}>Marketplace</Text>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.8} style={{}}>
          <Text
            style={
              styles.listDescription
            }>{`View All Marketplace Update >`}</Text>
        </TouchableOpacity>
      </View>
      <MarketplaceList />
    </View>
  );
};

export default HomeScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.spacing.container01,
      ...theme.align.flexCol,
      flex: 1,
      backgroundColor: theme.color.background01,
    },
    listTitle: {
      ...theme.font.labelMedium,
      marginBottom: 6,
      color: theme.color.primary,
    },
    listTitleRow: {
      ...theme.align.flexRowBetween,
    },
    listDescription: {
      ...theme.font.caption2,
      color: theme.color.backgroundSecondary,
    },
    sectionSpace: {
      marginTop: 42,
    },
  });
};
