import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';

import { theme } from '../constants/theme';

const screens = createStackNavigator(
  { Browse, Explore, Login, Product, Settings, Welcome },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  },
);
