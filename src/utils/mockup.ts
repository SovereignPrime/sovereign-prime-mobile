import Avatar01 from '@image/mockup/avatar01.png';
import Avatar02 from '@image/mockup/avatar02.png';
import Avatar03 from '@image/mockup/avatar03.png';
import Avatar04 from '@image/mockup/avatar04.png';
import Avatar05 from '@image/mockup/avatar05.png';
import Avatar06 from '@image/mockup/avatar06.png';
import MarketItem01 from '@image/mockup/marketItem01.png';
import MarketItem02 from '@image/mockup/marketItem02.png';
import MarketItem03 from '@image/mockup/marketItem03.png';
import MarketItem04 from '@image/mockup/marketItem04.png';
import MarketItem1 from '@image/mockup/marketItem001.png';
import MarketItemUpdate1 from '@image/mockup/marketItem0001.png';

const mockupNotificationList = [
  {
    id: 1,
    users: [
      {
        id: 1,
        avatar: Avatar01,
      },
      {
        id: 3,
        avatar: Avatar03,
      },
      {
        id: 5,
        avatar: Avatar05,
      },
    ],
    description: 'Jessica, Brooke and other 7 people have sent you message',
    read: false,
    createdAt: '2022-12-17 20:55:10',
  },
  {
    id: 2,
    users: [
      {
        id: 2,
        avatar: Avatar02,
      },
    ],
    description: 'Akalan has sent you a payment',
    read: false,
    createdAt: '2022-12-18 02:55:10',
  },
  {
    id: 3,
    users: [
      {
        id: 4,
        avatar: Avatar04,
      },
      {
        id: 6,
        avatar: Avatar06,
      },
    ],
    description: 'Bella and Brandly have updated marketplace',
    read: true,
    createdAt: '2022-12-18 01:55:10',
  },
];

const mockupVerificationUsersList = [
  {
    id: 1,
    avatar: Avatar01,
    name: 'Lella',
  },
  {
    id: 2,
    avatar: Avatar02,
    name: 'Paul',
  },
];

const mockupMarketItemList = [
  {
    id: 1,
    image: MarketItem01,
  },
  {
    id: 2,
    image: MarketItem02,
  },
  {
    id: 3,
    image: MarketItem03,
  },
  {
    id: 4,
    image: MarketItem04,
  },
];

const mockupMarketItemListForProfile = [
  {
    id: 1,
    image: MarketItem1,
  },
  {
    id: 2,
    image: MarketItem1,
  },
  {
    id: 3,
    image: MarketItem1,
  },
  {
    id: 4,
    image: MarketItem1,
  },
];

const mockupUserMarketUpdates = [
  {
    id: 1,
    name: 'Colorful Sweater',
    price: 20,
    image: MarketItemUpdate1,
  },
];

const mockupMarketList = [
  [
    {
      id: 1,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 1,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
    {
      id: 2,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 1,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
  ],
  [
    {
      id: 3,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 1,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
    {
      id: 4,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 1,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
  ],
  [
    {
      id: 5,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 6,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
    {
      id: 6,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 1,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
  ],
  [
    {
      id: 8,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 6,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
    {
      id: 9,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 1,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
  ],
  [
    {
      id: 7,
      name: 'Apple Watch',
      price: 450,
      likes: 14,
      dislikes: 0,
      image: MarketItem1,
      user: {
        id: 1,
        avatar: Avatar01,
        name: 'Eric Smith',
      },
    },
    undefined,
  ],
];

const mockupContactList = [
  {
    id: 1,
    image: Avatar01,
    name: 'Brooke Weaver',
    latestMessage: 'Hi, how are you doing?',
    latestDate: 'Today, 8:20 pm',
    unread: true,
  },
  {
    id: 2,
    image: Avatar02,
    name: 'Han Noguchi',
    latestMessage: 'Talk to yo later!',
    latestDate: 'Today, 8:10 pm',
    unread: false,
  },
  {
    id: 3,
    image: Avatar03,
    name: 'Jessie Lake',
    latestMessage: 'See ya :)',
    latestDate: 'Today, 7:40 pm',
    unread: false,
  },
  {
    id: 3,
    image: Avatar04,
    name: 'Group Chat',
    latestMessage: 'Haha',
    latestDate: 'Today, 5:15 pm',
    unread: true,
  },
];

const mockupCompletedTransactionsList = [
  {
    id: 1,
    type: 0, // ! request: 0, payment: 1,
    name: 'OYEKALE OLUMIDE',
    date: '9:00 PM',
    amount: 50,
  },
  {
    id: 2,
    type: 0,
    name: 'OYEKALE OLUMIDE',
    date: '9:00 PM',
    amount: 50,
  },
  {
    id: 3,
    type: 1,
    name: 'OYEKALE OLUMIDE',
    date: '9:00 PM',
    amount: 50,
  },
  {
    id: 4,
    type: 0,
    name: 'OYEKALE OLUMIDE',
    date: '9:00 PM',
    amount: 50,
  },
  {
    id: 5,
    type: 1, // ! request: 0, payment: 1,
    name: 'OYEKALE OLUMIDE',
    date: '9:00 PM',
    amount: 50,
  },
];

const mockupWalletNotifications = [
  {
    id: 1,
    createdAt: '2023-01-09 10:20:50',
    data: [
      {
        id: 23,
        type: 'request_complete',
        from: {
          id: 1,
          name: 'Georges',
        },
        to: {
          id: 8,
          name: 'Oyekale olumide',
        },
      },
      {
        id: 22,
        type: 'transaction_notify',
        subtype: 'sent',
        amount: 50,
        balance: 450,
        to: {
          id: 5,
          name: 'Lyekale olumide',
        },
      },
    ],
  },
  {
    id: 2,
    createdAt: '2023-01-09 10:20:50',
    data: [
      {
        id: 23,
        type: 'request_complete',
        from: {
          id: 1,
          name: 'Georges',
        },
        to: {
          id: 8,
          name: 'Oyekale olumide',
        },
      },
      {
        id: 22,
        type: 'transaction_notify',
        subtype: 'sent',
        amount: 50,
        balance: 450,
        to: {
          id: 5,
          name: 'Lyekale olumide',
        },
      },
    ],
  },
];

export {
  mockupNotificationList,
  mockupVerificationUsersList,
  mockupMarketItemList,
  mockupMarketItemListForProfile,
  mockupUserMarketUpdates,
  mockupContactList,
  mockupMarketList,
  mockupCompletedTransactionsList,
  mockupWalletNotifications,
};
