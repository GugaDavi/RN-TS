import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList } from './types/typeRoutes';

import Main from './screens/Main';
import User from './screens/User';
import Webview from './screens/Webview';

const { Navigator: Stack, Screen } = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#7159c1' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 18, fontWeight: 'bold' }
        }}>
        <Screen name="Main" component={Main} options={{ title: 'Home' }} />
        <Screen
          name="User"
          component={User}
          options={({ route }) => ({ title: route.params.item.name })}
        />
        <Screen
          name="WebView"
          component={Webview}
          options={({ route }) => ({ title: route.params.url })}
        />
      </Stack>
    </NavigationContainer>
  );
};

export default Routes;
