import { Image, StyleSheet, Text, View } from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const VerificationList = ({ list }: { list: any[] }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <View style={styles.unreadIcon} />
        <Text style={styles.labelText}>5 Verification Left</Text>
      </View>
      <Text style={styles.alertText}>Due in 5 Days</Text>
      {list.map((item: any) => (
        <View style={styles.itemRow} key={`verification-row-${item.id}`}>
          <View style={styles.avatarBox}>
            <Image source={item.avatar} style={styles.avatarImage} />
          </View>
          <Text numberOfLines={1} style={styles.labelText}>
            {`${item.name} rate you as an authentic user`}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default VerificationList;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.box.card,
      ...theme.align.flexCol,
      paddingVertical: 18,
      paddingHorizontal: 14,
    },
    labelRow: {
      ...theme.align.flexRowCenter,
    },
    alertText: {
      ...theme.font.caption2,
      textAlign: 'right',
      color: theme.color.font01,
    },
    avatarBox: {
      ...theme.box.avatar,
      marginRight: 6,
    },
    avatarImage: {
      width: '100%',
      height: '100%',
    },
    unreadIcon: {
      ...theme.box.unreadIcon,
      marginRight: 15,
    },
    labelText: {
      ...theme.font.captionMedium,
      color: theme.color.primary,
    },
    itemRow: {
      ...theme.align.flexRowCenter,
      marginTop: 13,
    },
  });
};
