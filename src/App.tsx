import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1e2026" />
      <View style={{ flex: 1, backgroundColor: '#1e2026' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
