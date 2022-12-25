import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// * components
import { CategoryMenu } from '@components/atoms/popups/MarketMenu';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import PlusIcon from '@svg/plus.svg';
import SearchIcon from '@svg/search.svg';
import FilterIcon from '@svg/filter.svg';
import { mockupMarketList } from '@utils/mockup';

const MarketScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PlusIcon width={18} height={18} style={styles.icon} />
        <SearchIcon width={25} height={25} style={styles.icon} />
      </View>
      <View style={styles.toolbar}>
        <CategoryMenu additionalStyle={styles.categoryValue} />
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.85}
          style={styles.filter}>
          <Text style={{}}>Filter</Text>
          <FilterIcon style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{}} style={{}}>
        {mockupMarketList.map((itemsChunk, chunkIndex) => (
          <View
            style={styles.itemsRow}
            key={`market-category-item-${chunkIndex}`}>
            {itemsChunk.map((item, index) =>
              item ? (
                <View
                  style={[
                    styles.itemContainer,
                    {
                      marginRight: index ? 0 : 21,
                    },
                  ]}
                  key={`market-category-item-${item.id}`}>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </View>
              ) : (
                <View
                  style={[
                    styles.itemContainer,
                    {
                      marginRight: index ? 0 : 21,
                      borderWidth: 0,
                    },
                  ]}
                  key={`market-category-item-${chunkIndex}-${index}`}
                />
              ),
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MarketScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexCol,
      flex: 1,
      paddingHorizontal: 30,
      paddingVertical: 21,
      backgroundColor: theme.color.background01,
    },
    header: {
      ...theme.align.flexRowBetween,
      marginBottom: 13,
    },
    icon: {
      color: theme.color.primary,
    },
    toolbar: {
      ...theme.align.flexRowBetween,
      marginBottom: 20,
    },
    categoryValue: {
      flex: 1,
      maxWidth: '40%',
    },
    filter: {
      ...theme.align.flexXCenter,
      paddingVertical: 8,
      flex: 1,
      maxWidth: '30%',
      backgroundColor: theme.color.borderPrimary,
    },
    itemsRow: {
      ...theme.align.flexRowBetween,
      marginBottom: 19,
    },
    itemContainer: {
      flex: 1,
      aspectRatio: 3 / 4,
      borderWidth: 2.5,
      borderColor: theme.color.borderPrimary,
    },
  });
};
