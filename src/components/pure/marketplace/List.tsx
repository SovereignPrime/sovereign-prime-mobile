import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const MarketplaceList = ({ list }: { list: any[] }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.container}
      style={{}}>
      {list.map(item => (
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.85}
          style={styles.itemContainer}
          key={`marketplace-item-${item.id}`}>
          <Image source={item.image} style={styles.itemImage} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MarketplaceList;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flexGrow: 0,
      flexShrink: 0,
      flexDirection: 'row',
    },
    itemContainer: {
      marginRight: 12,
      position: 'relative',
      width: 92,
      height: 119,
      borderWidth: 1,
      borderColor: theme.color.borderPrimary,
    },
    itemImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
};
