import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * components
import { SearchInput } from '@components/atoms/inputs/inputs';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import PlusIcon from '@svg/plus.svg';
import CheckedIcon from '@svg/checked.svg';
import { mockupContactList } from '@utils/mockup';

const ContactList = () => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <PlusIcon width={18} height={18} style={styles.icon} />
        <Text style={styles.headerText}>Message</Text>
      </View>
      <SearchInput
        search="best"
        setSearch={(newSearch: string | undefined) => {
          console.log('search text changes', newSearch);
        }}
        placeholder="Search"
        additionalStyle={styles.searchbar}
      />
      <View style={styles.tabbar}>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={[styles.tabItem, styles.activeTabItem]}>
          <Text>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={styles.tabItem}>
          <Text>Strangers</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentList}>
        {mockupContactList.map((item, index) => (
          <View
            style={styles.contactItem}
            key={`contact-item-${item.id}-${index}`}>
            <View style={styles.contactItemAvatar}>
              <Image source={item.image} style={styles.contactItemAvatar} />
              {item.unread ? <View style={styles.unreadLabel} /> : null}
            </View>
            <View style={styles.contactItemContent}>
              <View style={styles.contactItemRow}>
                <Text numberOfLines={1} style={styles.contactItemName}>
                  {item.name}
                </Text>
                <Text numberOfLines={1} style={styles.contactItemDate}>
                  {item.latestDate}
                </Text>
              </View>
              <View style={styles.contactItemRow}>
                <Text numberOfLines={1} style={styles.contactItemMessage}>
                  {item.latestMessage}
                </Text>
                {item.unread ? null : <CheckedIcon />}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ContactList;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 9,
      paddingHorizontal: 20,
      backgroundColor: theme.color.background01,
    },
    headerBar: {
      ...theme.align.flexRowBetween,
      width: '100%',
    },
    icon: {
      color: theme.color.primary,
    },
    headerText: {
      ...theme.font.normalMedium,
      color: theme.color.primary,
    },
    searchbar: {
      marginTop: 22,
    },
    tabbar: {
      ...theme.align.flexRowEnd,
      marginTop: 32,
    },
    tabItem: {
      marginHorizontal: 6,
      paddingVertical: 2,
      paddingHorizontal: 4,
    },
    activeTabItem: {
      backgroundColor: theme.color.borderPrimary,
    },
    contentList: {
      marginTop: 47,
      flex: 1,
    },
    contactItem: {
      ...theme.align.flexRowCenter,
      paddingVertical: 11,
      borderBottomWidth: 1,
      borderColor: theme.color.borderPrimary,
    },
    contactItemAvatar: {
      width: 55,
      height: 55,
      borderRadius: 28,
    },
    contactItemContent: {
      ...theme.align.flexColBetween,
      flex: 1,
      marginLeft: 10,
      paddingVertical: 5,
      height: 55,
    },
    contactItemRow: {
      ...theme.align.flexRowBetween,
      width: '100%',
    },
    contactItemName: {
      ...theme.font.normalMedium,
      color: theme.color.primary,
    },
    contactItemDate: {
      ...theme.font.caption3,
      color: theme.color.font01,
    },
    contactItemMessage: {
      ...theme.font.normal,
      color: theme.color.primary,
    },
    unreadLabel: {
      position: 'absolute',
      right: 2,
      top: 0,
      width: 13,
      height: 13,
      borderRadius: 7,
      backgroundColor: theme.color.unread,
    },
  });
};
