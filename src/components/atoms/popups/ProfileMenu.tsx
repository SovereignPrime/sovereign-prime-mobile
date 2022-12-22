import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { StyleSheet, Text, View } from 'react-native';
// * assets
import MoreIcon from '@svg/more.svg';

// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const ProfileMenu = () => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <Menu>
      <MenuTrigger>
        <MoreIcon />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.menuContainer,
          optionWrapper: styles.menuOption,
        }}>
        <MenuOption
          onSelect={() => {}}
          // key={`profile-menu-option-delete-user`}
        >
          <Text>Delete User</Text>
        </MenuOption>
        <MenuOption
          onSelect={() => {}}
          // key={`profile-menu-option-report`}
        >
          <Text style={styles.menuOptionText}>Report</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default ProfileMenu;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    menuContainer: {
      marginTop: 28,
      paddingVertical: 7,
      paddingHorizontal: 13,
      borderWidth: 2,
      borderColor: theme.color.borderPrimary,
    },
    menuOption: {
      paddingVertical: 8,
    },
    menuOptionText: {
      ...theme.font.captionMedium,
      color: theme.color.primary,
    },
  });
};
