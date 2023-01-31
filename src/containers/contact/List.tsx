import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * components
import ContactList from '@components/pure/contact/List';
import { SearchInput } from '@components/atoms/inputs/inputs';
// * styles
import { Theme } from '@theme/Theme.interface';
// * assets
import PlusIcon from '@svg/plus.svg';
import CheckedIcon from '@svg/checked.svg';
import { mockupContactList } from '@utils/mockup';

const ContactListContainer = () => {
  return <ContactList />;
};

export default ContactListContainer;

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
