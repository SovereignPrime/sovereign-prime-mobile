import { StyleSheet, Text, View, ViewStyle } from 'react-native';
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
import DownIcon from '@svg/down.svg';
// * constants
import { marketCategoriesList } from '@utils/renderOptions';

const CategoryMenu = ({ additionalStyle }: { additionalStyle: ViewStyle }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <Menu style={[additionalStyle]}>
      <MenuTrigger>
        <View style={[styles.categoryValue]}>
          <Text style={{}}>Category</Text>
          <DownIcon style={styles.icon} />
        </View>
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.menuContainer,
          optionWrapper: styles.menuOption,
        }}>
        <View style={styles.menuHeader}>
          <Text style={{}}>Category</Text>
          <DownIcon style={styles.icon} />
        </View>
        {marketCategoriesList.map(category => {
          const Icon = category.icon;
          return (
            <MenuOption
              onSelect={() => {}}
              key={`market-category-${category.value}`}>
              <View style={styles.iconContainer}>
                <Icon width={16} height={16} />
              </View>
              <Text>{category.label}</Text>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
};

export { CategoryMenu };

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    categoryValue: {
      ...theme.align.flexXCenter,
      paddingVertical: 4,
      borderWidth: 4,
      borderColor: theme.color.borderPrimary,
    },
    icon: {
      color: theme.color.primary,
    },
    menuContainer: {
      marginTop: 0,
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
