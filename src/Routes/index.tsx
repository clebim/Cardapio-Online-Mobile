import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Menu from '../pages/Menu';

const StackNavigator = createStackNavigator();

const Routes: React.FC = () => (
  <StackNavigator.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#1e2026' },
    }}
  >
    <StackNavigator.Screen name="dashboard" component={Dashboard} />
    <StackNavigator.Screen name="menu" component={Menu} />
  </StackNavigator.Navigator>
);

export default Routes;
