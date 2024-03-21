import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
