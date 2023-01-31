import VehicleIcon from '@svg/vehicle.svg';
import PropertyIcon from '@svg/rental.svg';
import ApparelIcon from '@svg/apparel.svg';
import ClassifiedIcon from '@svg/classified.svg';
import ElectronicsIcon from '@svg/electronics.svg';
import EntertainmentIcon from '@svg/entertainment.svg';
import FamilyIcon from '@svg/family.svg';
import StuffIcon from '@svg/free_stuff.svg';
import GardenIcon from '@svg/garden.svg';

import CardIcon from '@svg/card.svg';
import FulfilledIcon from '@svg/check.svg';
import TransactionIcon from '@svg/transaction.svg';
import NotificationIcon from '@svg/notification.svg';

import VerifyAvatar01 from '@image/verification_avatar01.png';
import VerifyAvatar02 from '@image/verification_avatar02.png';
import VerifyAvatar03 from '@image/verification_avatar03.png';
import VerifyAvatar04 from '@image/verification_avatar04.png';
import VerifyAvatar05 from '@image/verification_avatar05.png';
import VerifyAvatar06 from '@image/verification_avatar06.png';
import VerifyAvatar07 from '@image/verification_avatar07.png';

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

const addUsersMenuList = [
  {
    label: 'Add Contacts',
    value: 'contact',
  },
  {
    label: 'New Chat',
    value: 'chat',
  },
  {
    label: 'Payment',
    value: 'payment',
  },
];

const walletSubmenuList = [
  {
    label: 'Payment',
    description: 'Request payment and make payment',
    icon: CardIcon,
    value: 'payment',
  },
  {
    label: 'Transaction',
    description: 'Completed and canceled transaction',
    icon: TransactionIcon,
    value: 'transaction',
  },
  {
    label: 'Notification',
    description: 'Receive notification on all wallet acticities',
    icon: NotificationIcon,
    value: 'notification',
  },
  {
    label: 'Fulfilled Payment',
    description: 'History for all completed payment',
    icon: FulfilledIcon,
    value: 'fulfilled',
  },
];

const walletPaymentSubmenuList = [
  {
    label: 'Request Payment',
    icon: CardIcon,
    value: 'request',
  },
  {
    label: 'Make Payment',
    icon: CardIcon,
    value: 'make',
  },
];

const walletTransactionsSubmenuList = [
  {
    label: 'Completed Transaction',
    icon: CardIcon,
    value: 'completed',
  },
  {
    label: 'Canceled Transaction',
    icon: CardIcon,
    value: 'canceled',
  },
];

/**
 * * verification system image list
 */
const AvatarPosList = [
  {
    x: 37,
    y: 40,
    width: 158,
    height: 158,
    // * image
    image: VerifyAvatar01,
  },
  {
    x: -26,
    y: 146,
    width: 39,
    height: 39,
    image: VerifyAvatar02,
  },
  {
    x: 53,
    y: '52%',
    width: 51,
    height: 51,
    image: VerifyAvatar03,
  },
  {
    x: -47,
    y: '40%',
    width: 95,
    height: 95,
    image: VerifyAvatar04,
  },
  {
    x: 62,
    y: '60%',
    width: 127,
    height: 127,
    image: VerifyAvatar05,
  },
  {
    x: 52,
    y: -26,
    width: 39,
    height: 39,
    image: VerifyAvatar06,
  },
  {
    x: -43,
    y: -65,
    width: 63,
    height: 63,
    image: VerifyAvatar07,
  },
];

export {
  notificationTabList,
  marketCategoriesList,
  walletSubmenuList,
  walletPaymentSubmenuList,
  walletTransactionsSubmenuList,
  AvatarPosList,
  addUsersMenuList,
};
