import { Image, StyleSheet, Text, View } from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const ChatItem = ({
  content,
  product,
  createdAt,
}: {
  content: string;
  product: {
    id: number;
    image: any;
    name: string;
    price: number;
  };
  createdAt: string; // ! needs to convert this with dayjs
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.chatDate}>{createdAt}</Text>
      <View style={styles.productContainer}>
        <Image source={product.image} style={styles.productImage} />
        <View style={styles.productDetail}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productPrice}>{`$${product.price}`}</Text>
        </View>
      </View>
      <View style={styles.chatbox}>
        <Text style={styles.chatContent}>{content}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 0,
      paddingHorizontal: 21,
      paddingVertical: 12,
    },
    chatDate: {
      ...theme.font.normal,
      textAlign: 'center',
      color: theme.color.font02,
    },
    productContainer: {
      ...theme.align.flexRow,
      marginTop: 13,
      paddingHorizontal: 20,
      paddingVertical: 21,
      width: '100%',
      borderWidth: 1,
      borderColor: theme.color.borderPrimary,
      backgroundColor: theme.color.secondary,
    },
    productImage: {
      height: 114,
      width: 114,
    },
    productDetail: {
      ...theme.align.flexCol,
      marginLeft: 30,
    },
    productTitle: {
      ...theme.font.desc2,
      color: theme.color.primary,
    },
    productPrice: {
      ...theme.font.desc2,
      marginTop: 5,
      color: theme.color.primary,
    },
    chatbox: {
      marginTop: 34,
      marginLeft: 41,
      paddingHorizontal: 22,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: theme.color.borderPrimary,
      backgroundColor: theme.color.secondary,
    },
    chatContent: {
      ...theme.font.normal,
      color: theme.color.primary,
    },
  });
};
