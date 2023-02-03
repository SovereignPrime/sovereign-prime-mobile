import { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * components
import { SearchInput } from '@components/atoms/inputs/inputs';
import { AddUsersMenu } from '@components/atoms/popups/AddUsersMenu';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import CheckedIcon from '@svg/checked.svg';

const ChatList = ({
  activeTab,
  list,
  setActiveTab,
  onGoContact,
  goChat,
}: {
  activeTab: number;
  list: any[];
  setActiveTab: (newTab: number) => void;
  onGoContact: () => void;
  goChat: (newChatId: number) => () => void;
}) => {
  const onTabPress = useCallback(
    (newTab: number) => () => setActiveTab(newTab),
    [],
  );

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <AddUsersMenu additionalStyle={styles.addMenu} />
        <TouchableOpacity activeOpacity={0.8} onPress={onGoContact} style={{}}>
          <Text style={styles.headerText}>Contact</Text>
        </TouchableOpacity>
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
        {tabsList.map(tabItem => (
          <TouchableOpacity
            onPress={onTabPress(tabItem.value)}
            activeOpacity={0.8}
            style={[
              styles.tabItem,
              activeTab === tabItem.value ? styles.activeTabItem : {},
            ]}
            key={`tab-item-${tabItem.value}`}>
            <Text>{tabItem.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentList}>
        {list.map((item, index) => (
          <TouchableOpacity
            onPress={goChat(item.id)}
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
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChatList;

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
    addMenu: {
      flex: 1,
      maxWidth: '30%',
    },
    headerPlusIcon: {
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
      marginTop: 25,
      paddingBottom: 21,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: theme.color.backgroundPrimary,
    },
    tabText: {
      ...theme.font.normal,
      color: theme.color.primary,
    },
    goIcon: {
      color: theme.color.primary,
    },
    contentList: {
      flex: 1,
      marginTop: 26,
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
    tabItem: {
      marginHorizontal: 6,
      paddingVertical: 2,
      paddingHorizontal: 4,
    },
    activeTabItem: {
      backgroundColor: theme.color.borderPrimary,
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

const tabsList = [
  {
    label: 'Friends',
    value: 0,
  },
  {
    label: 'Strangers',
    value: 1,
  },
];
