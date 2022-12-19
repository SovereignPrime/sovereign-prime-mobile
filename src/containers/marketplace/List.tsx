import MarketplaceList from '@components/pure/marketplace/List';
// * mockup data
import { mockupMarketItemList } from '@utils/mockup';

const MarketplaceListContainer = () => {
  return <MarketplaceList list={mockupMarketItemList} />;
};

export default MarketplaceListContainer;
