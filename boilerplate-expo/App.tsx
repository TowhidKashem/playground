import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Camera from './src/Camera/Camera';
import Discover from './src/Discover/Discover';
import Home from './src/Home/Home';
import Inbox from './src/Inbox/Inbox';
import Profile from './src/Profile/Profile';

const Tab = createBottomTabNavigator();

const getColor = (route: string, isTab: boolean = false): string => {
  const darkRoutes = new Set(['Home']);
  return darkRoutes.has(route) ? 'black' : 'white';
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: getColor(route.name, true),
          tabBarInactiveBackgroundColor: getColor(route.name, true)
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color={getColor('Home')} />
            )
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name="search1"
                size={24}
                color={getColor('Discover')}
              />
            )
          }}
        />
        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name="plussquare"
                size={24}
                color={getColor('Camera')}
              />
            )
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="message1" size={24} color={getColor('Inbox')} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={24} color={getColor('Profile')} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
