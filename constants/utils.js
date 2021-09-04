const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  favourite: 'Favourite',
  notification: 'Notification',
  my_wallet: 'My Wallet'
}

const ratings = [
  {
    id: 0,
    label: '1',
  },
  {
    id: 1,
    label: '2',
  },
  {
    id: 2,
    label: '3',
  },
  {
    id: 3,
    label: '4',
  },
  {
    id: 4,
    label: '5',
  },
]

const delivery_time = [
  {
    id: 0,
    label: '10 mins',
  },
  {
    id: 1,
    label: '20 mins',
  },
  {
    id: 2,
    label: '30 mins',
  },
]

const tags = [
  {
    id: 0,
    label: 'Burger',
  },
  {
    id: 1,
    label: 'Taccos',
  },
  {
    id: 2,
    label: 'Vegetarian',
  },
  {
    id: 3,
    label: 'Japanese',
  },
  {
    id: 4,
    label: 'Dessert',
  },
]

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.notification,
  },
  {
    id: 5,
    label: screens.my_wallet,
  }
]

const utils = {
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags
};

export default utils;