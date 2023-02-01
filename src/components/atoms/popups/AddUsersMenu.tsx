import { StyleSheet, Text, ViewStyle } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import PlusIcon from '@svg/plus.svg';
import { addUsersMenuList } from '@utils/renderOptions';

const AddUsersMenu = ({ additionalStyle }: { additionalStyle: ViewStyle }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <Menu style={[additionalStyle]}>
      <MenuTrigger>
        <PlusIcon width={18} height={18} style={styles.plusIcon} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.menuContainer,
          optionWrapper: styles.menuOption,
        }}>
        <PlusIcon width={18} height={18} style={styles.plusIcon} />
        {addUsersMenuList.map(item => {
          return (
            <MenuOption onSelect={() => {}} key={`add-user-${item.value}`}>
              <Text style={{}}>{item.label}</Text>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
};

export { AddUsersMenu };

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    categoryValue: {},
    icon: {},
    plusIcon: {
      color: theme.color.primary,
    },
    menuContainer: {
      marginTop: -10,
      marginLeft: -10,
      paddingVertical: 4,
      paddingHorizontal: 9,
      borderWidth: 4,
      borderColor: theme.color.borderPrimary,
    },
    menuHeader: {
      ...theme.align.flexXCenter,
      paddingVertical: 4,
    },
    menuOption: {
      ...theme.align.flexRowCenter,
      paddingVertical: 6,
    },
    menuOptionText: {},
    iconContainer: {
      ...theme.align.flexCenter,
      marginRight: 6,
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: '#959595',
    },
  });
};
