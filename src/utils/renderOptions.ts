import VehicleIcon from '@svg/vehicle.svg';
import PropertyIcon from '@svg/rental.svg';
import ApparelIcon from '@svg/apparel.svg';
import ClassifiedIcon from '@svg/classified.svg';
import ElectronicsIcon from '@svg/electronics.svg';
import EntertainmentIcon from '@svg/entertainment.svg';
import FamilyIcon from '@svg/family.svg';
import StuffIcon from '@svg/free_stuff.svg';
import GardenIcon from '@svg/garden.svg';

const notificationTabList = [
  {
    label: 'All',
    value: 0,
  },
  {
    label: 'Message',
    value: 1,
  },
  {
    label: 'Marketplace',
    value: 2,
  },
  {
    label: 'Payment',
    value: 3,
  },
];

const marketCategoriesList = [
  {
    label: 'Vehicles',
    value: 0,
    icon: VehicleIcon,
  },
  {
    label: 'Property Rentals',
    value: 1,
    icon: PropertyIcon,
  },
  {
    label: 'Apparels',
    value: 2,
    icon: ApparelIcon,
  },
  {
    label: 'Classifieds',
    value: 3,
    icon: ClassifiedIcon,
  },
  {
    label: 'Electronics',
    value: 4,
    icon: ElectronicsIcon,
  },
  {
    label: 'Entertainment',
    value: 5,
    icon: EntertainmentIcon,
  },
  {
    label: 'Family',
    value: 6,
    icon: FamilyIcon,
  },
  {
    label: 'Free Stuff',
    value: 7,
    icon: StuffIcon,
  },
  {
    label: 'Garden & Outdoors',
    value: 8,
    icon: GardenIcon,
  },
];

export { notificationTabList, marketCategoriesList };
