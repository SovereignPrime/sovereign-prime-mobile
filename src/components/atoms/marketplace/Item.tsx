import { Image, StyleSheet, Text, View } from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const MarketDetailItem = ({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: any;
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.detailItem}>
      <Image source={image} style={styles.detailItemImage} />
      <View style={styles.detailItemFooter}>
        <Text style={styles.detailItemFooterText}>Detail</Text>
      </View>
      <View style={styles.detailItemInfo}>
        <Text style={styles.detailItemInfoText}>{name}</Text>
        <Text style={styles.detailItemInfoText}>{`$${price}.00`}</Text>
      </View>
    </View>
  );
};

export { MarketDetailItem };

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    detailItem: {
      width: 165,
      aspectRatio: 3 / 4,
    },
    detailItemImage: {
      width: '100%',
      height: '100%',
    },
    detailItemFooter: {
      ...theme.align.flexCenter,
      height: '10%',
      width: '100%',
      backgroundColor: theme.color.borderPrimary,
    },
    detailItemFooterText: {
      ...theme.font.caption2,
      color: theme.color.primary,
    },
    detailItemInfo: {
      position: 'absolute',
      bottom: '10%',
      left: '5%',
      width: '90%',
      paddingHorizontal: 11,
      paddingVertical: 7,
      backgroundColor: theme.color.backgroundSecondary,
      opacity: 0.8,
    },
    detailItemInfoText: {
      ...theme.align.captioMedium,
      color: theme.color.secondary,
    },
  });
};
