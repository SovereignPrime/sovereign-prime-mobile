import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import GoIcon from '@svg/go.svg';

const WalletSubmenu = ({
  label,
  description,
  Icon,
  additionalStyle,
  onPress,
}: {
  label: string;
  description: string;
  Icon: any;
  additionalStyle: ViewStyle;
  onPress: () => void;
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={[styles.submenuContainer, additionalStyle]}>
      <Icon width={24} height={24} style={styles.icon} />
      <View style={styles.submenuContentContainer}>
        <Text style={styles.submenuLabel}>{label}</Text>
        <Text numberOfLines={1} style={styles.submenuDescription}>
          {description}
        </Text>
      </View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{}}>
        <GoIcon width={13} height={20} style={styles.goIcon} />
      </TouchableOpacity>
    </View>
  );
};

const WalletSubmenuWithoutDesc = ({
  label,
  Icon,
  additionalStyle,
  onPress,
}: {
  label: string;
  Icon: any;
  additionalStyle: ViewStyle;
  onPress: () => void;
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={[styles.submenuContainer, additionalStyle]}>
      <Icon width={24} height={24} style={styles.icon} />
      <View style={styles.submenuContentContainer}>
        <Text style={styles.submenuLabel}>{label}</Text>
      </View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{}}>
        <GoIcon width={13} height={20} style={styles.goIcon} />
      </TouchableOpacity>
    </View>
  );
};

export { WalletSubmenu, WalletSubmenuWithoutDesc };

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    submenuContainer: {
      ...theme.align.flexRowCenter,
      paddingHorizontal: 29,
      paddingVertical: 15,
      borderRadius: 5,
      backgroundColor: theme.color.background04,
    },
    icon: {
      marginRight: 20,
      color: theme.color.primary,
    },
    submenuContentContainer: {
      ...theme.align.flexCol,
      flex: 1,
    },
    submenuLabel: {
      ...theme.font.desc,
      color: theme.color.primary,
    },
    submenuDescription: {
      ...theme.font.captionLight,
    },
    goIcon: {
      color: theme.color.primary,
    },
  });
};
