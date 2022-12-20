import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * constants
import { notificationTabList } from '@utils/renderOptions';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

/**
 *
 * @param {number} type
 * @param {(newType: number) => void} setType
 * @param {any[]} list
 * @returns
 */
const NotificationList = ({
  type,
  setType,
  list,
}: {
  type: number;
  setType: (newType: number) => void;
  list: any[];
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {notificationTabList.map((item: any) => (
          <TouchableOpacity
            onPress={() => setType(item.value)}
            activeOpacity={0.8}
            style={[
              styles.tabItem,
              type === item.value ? styles.activeTabItem : {},
            ]}
            key={`notification-type-tab-${item.value}`}>
            <Text
              style={[
                styles.tabItemText,
                type === item.value ? styles.activeTabItemText : {},
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {list.map((item: any) => (
        <View style={styles.itemRow} key={`notification-row-${item.id}`}>
          <View style={styles.firstPartRow}>
            {item.read ? (
              <View style={styles.readSpace} />
            ) : (
              <View style={styles.unreadIcon} />
            )}
            {item.users.map((user: any, index: number) => (
              <View
                style={{ ...styles.avatarBox, zIndex: -index }}
                key={`notification-row-${item.id}-${user.id}`}>
                <Image source={user.avatar} style={styles.avatarImage} />
              </View>
            ))}
          </View>
          <Text numberOfLines={2} style={styles.rowDescription}>
            {item.description}
          </Text>
          <Text style={styles.timeDescription}>
            {dayjs(item.createdAt).fromNow()}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default NotificationList;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.box.card,
      ...theme.align.flexCol,
      paddingVertical: 18,
      paddingHorizontal: 14,
    },
    tabBar: {
      ...theme.align.flexRowBetween,
      flex: 0,
      marginBottom: 16,
      padding: 6,
      width: '100%',
      backgroundColor: theme.color.background02,
    },
    tabItem: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 2,
    },
    activeTabItem: {
      backgroundColor: theme.color.primary,
    },
    tabItemText: {
      ...theme.font.caption1,
      color: theme.color.primary,
    },
    activeTabItemText: {
      color: theme.color.secondary,
    },
    itemRow: {
      ...theme.align.flexRowCenter,
      marginTop: 13,
    },
    firstPartRow: {
      ...theme.align.flexRowCenter,
      flex: 0,
    },
    unreadIcon: {
      ...theme.box.unreadIcon,
      marginRight: 15,
    },
    readSpace: {
      width: 14,
    },
    avatarBox: {
      ...theme.box.avatar,
      marginLeft: -10,
    },
    avatarImage: {
      width: '100%',
      height: '100%',
    },
    rowDescription: {
      ...theme.font.captionMedium,
      marginLeft: 10,
      flex: 1,
    },
    timeDescription: {
      ...theme.font.caption1,
      flex: 0,
      color: theme.color.font01,
    },
  });
};
