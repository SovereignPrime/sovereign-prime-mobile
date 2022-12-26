import { Text, TouchableOpacity, View } from 'react-native';
// * styles
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import createStyles from './styles';
// * assets
import BackIcon from '@svg/back2.svg';

const WalletHeader = ({ title, onBack }: { title: string; onBack: () => void }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.walletHeaderContainer}>
      <TouchableOpacity onPress={onBack} activeOpacity={0.8} style={{}}>
        <BackIcon width={24} height={24} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.walletHeaderText}>{title}</Text>
      <View style={styles.walletHeaderEmptySection} />
    </View>
  );
};

export { WalletHeader };
