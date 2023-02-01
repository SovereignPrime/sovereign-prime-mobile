import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * components
import { SearchInput } from '@components/atoms/inputs/inputs';
import { AddUsersMenu } from '@components/atoms/popups/AddUsersMenu';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import GoIcon from '@svg/go.svg';
import { mockupContactList } from '@utils/mockup';

const ContactList = ({ onGoChat }: { onGoChat: () => void }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <AddUsersMenu additionalStyle={styles.addMenu} />
        <TouchableOpacity activeOpacity={0.8} onPress={onGoChat} style={{}}>
          <Text style={styles.headerText}>Message</Text>
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
        <Text style={styles.tabText}>Groups</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={{}}>
          <GoIcon width={16} height={16} style={styles.goIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentList}>
        {mockupContactList.map((item, index) => (
          <View
            style={styles.contactItem}
            key={`contact-item-${item.id}-${index}`}>
            <View style={styles.contactItemAvatar}>
              <Image source={item.image} style={styles.contactItemAvatar} />
            </View>
            <View style={styles.contactItemContent}>
              <View style={styles.contactItemRow}>
                <Text numberOfLines={1} style={styles.contactItemName}>
                  {item.name}
                </Text>
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
      ...theme.align.flexRowBetween,
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
    },
    contactItemAvatar: {
      width: 55,
      height: 55,
      borderRadius: 28,
    },
    contactItemContent: {
      ...theme.align.flexRowCenter,
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
  });
};
