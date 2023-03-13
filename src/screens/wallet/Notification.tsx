import { SectionList, StyleSheet, Text, View } from 'react-native';
// * custom components
import { WalletHeader } from '@components/atoms/header/headers';
import WalletIDBox from '@components/atoms/wallet/IDBox';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * mockup data
import { mockupWalletNotifications } from '@utils/mockup';

const NotificationScreen = ({ onBack }: { onBack: () => void }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <WalletHeader title={'Notifications'} onBack={onBack} />
      <WalletIDBox
        walletID={`0x3558281`}
        additionalStyle={styles.walletIDBox}
      />
      <SectionList
        sections={notificationRenderData}
        keyExtractor={(item: any) => item.id}
        renderItem={NotificationItem}
        renderSectionHeader={({
          section: { title },
        }: {
          section: { title: string };
        }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderTitle}>{title}</Text>
          </View>
        )}
        stickySectionHeadersEnabled={false}
        ItemSeparatorComponent={NotificationSeparator}
      />
    </View>
  );
};

export default NotificationScreen;

const notificationRenderData = mockupWalletNotifications.map(item => ({
  title: item.createdAt,
  data: item.data,
}));

const NotificationSeparator = () => {
  const styles = useThemeAwareObject(createNotificationStyles);
  return (
    <View style={styles.separatorContainer}>
      <View style={styles.separator} />
    </View>
  );
};

const NotificationItem = ({
  item,
  index,
  section,
}: {
  item: any;
  index: number;
  section: { title: string; data: any[] };
}) => {
  const styles = useThemeAwareObject(createNotificationStyles);
  return (
    <View
      style={[
        styles.container,
        index == 0
          ? styles.topContainer
          : index == section.data.length - 1
          ? styles.bottomContainer
          : {},
      ]}>
      <Text style={styles.title}>
        {item.type == 'transaction_notify'
          ? `Transaction Notification`
          : item.type == 'request_complete'
          ? `We've completed a request transaction`
          : ''}
      </Text>
      <Text style={styles.description}>
        {item.type == 'transaction_notify'
          ? `You just sent $${item.amount} to ${item.to.name}. Your new balance is $${item.balance}.`
          : item.type == 'request_complete'
          ? `Hi ${item.from.name},we've sent a request for payment to ${item.to.name}. Kindly send us an email if this is not from you.`
          : ''}
      </Text>
    </View>
  );
};

const createNotificationStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      paddingVertical: 27,
      paddingHorizontal: 24,
      backgroundColor: theme.color.borderPrimary,
    },
    topContainer: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    bottomContainer: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    title: {
      ...theme.font.labelSemibold,
      color: theme.color.primary,
    },
    description: {
      ...theme.font.label2Light,
      marginTop: 12,
      lineHeight: 20,
      color: theme.color.primary,
    },
    separatorContainer: {
      paddingHorizontal: 24,
      backgroundColor: theme.color.borderPrimary,
    },
    separator: {
      borderTopWidth: 0.8,
      borderTopColor: theme.color.backgroundSecondary,
    },
  });
};

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexColCenter,
      flex: 1,
    },
    walletIDBox: {
      marginTop: 32,
      marginBottom: 10,
    },
    earnKarmaContainer: {
      ...theme.align.flexRowCenter,
      paddingLeft: 53,
      paddingRight: 24,
      paddingTop: 8,
      paddingBottom: 10,
      width: '100%',
      backgroundColor: theme.color.borderPrimary,
    },
    earnKarmaContentContainer: {
      ...theme.align.flexCol,
      flex: 1,
    },
    earnKarmaContentHeader: {
      ...theme.align.flexRow,
    },
    earnKarmaTitle: {
      ...theme.font.label2,
      color: theme.color.primary,
    },
    earnKarmaNewLabel: {
      ...theme.align.flexCenter,
      marginLeft: 45,
      width: 41,
      height: 24,
      borderRadius: 3,
      backgroundColor: theme.color.font02,
    },
    earnKarmaNewText: {
      ...theme.font.caption2Light,
      color: theme.color.primary,
    },
    earnKarmaDesc: {
      ...theme.font.caption1Light,
      color: theme.color.font02,
    },
    earnKarmaStartBtn: {
      ...theme.align.flexCenter,
      width: 54,
      height: 27,
      borderRadius: 3,
      backgroundColor: theme.color.primary,
    },
    earnKarmaStartText: {
      ...theme.font.caption1Light,
      color: theme.color.secondary,
    },
    submenuList: {
      flex: 1,
      marginTop: 40,
      paddingHorizontal: 24,
      width: '100%',
    },
    submenu: {
      marginBottom: 36,
    },
    sectionHeader: {
      marginTop: 27,
      marginBottom: 24,
    },
    sectionHeaderTitle: {
      ...theme.font.caption3,
      marginLeft: 24,
      color: theme.color.font02,
    },
  });
};
