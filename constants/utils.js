const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  favourite: 'Favourite',
  notification: 'Notification',
  my_wallet: 'My Wallet'
}

const bottom_tabs = [
  {
    id: 0,
    label: screens.search,
  },
  {
    id: 1,
    label: screens.cart,
  },
  {
    id: 2,
    label: screens.home,
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
  bottom_tabs
};

export default utils;