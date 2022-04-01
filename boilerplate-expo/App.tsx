import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens';

import { AntDesign } from '@expo/vector-icons';

import Discover from './src/Discover/Discover';
import Home from './src/Home/Home';
import Inbox from './src/Inbox/Inbox';
import Profile from './src/Profile/Profile';
import CameraModal from './src/Camera/Camera';

enableScreens();

const Tab = createBottomTabNavigator();
const NativeStack = createNativeStackNavigator();

const HomeStack = () => (
  <NativeStack.Navigator screenOptions={{ headerShown: false }}>
    <NativeStack.Screen name="Home" component={Home} />
  </NativeStack.Navigator>
);

const DiscoverStack = () => (
  <NativeStack.Navigator screenOptions={{ headerShown: false }}>
    <NativeStack.Screen name="Discover" component={Discover} />
  </NativeStack.Navigator>
);

const CameraStack = () => (
  <NativeStack.Navigator screenOptions={{ headerShown: false }}>
    <NativeStack.Screen name="Camera" component={CameraModal} />
  </NativeStack.Navigator>
);

const InboxStack = () => (
  <NativeStack.Navigator screenOptions={{ headerShown: false }}>
    <NativeStack.Screen name="Inbox" component={Inbox} />
  </NativeStack.Navigator>
);

const ProfileStack = () => (
  <NativeStack.Navigator screenOptions={{ headerShown: false }}>
    <NativeStack.Screen name="Profile" component={Profile} />
  </NativeStack.Navigator>
);

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CameraModal showModal={showModal} setShowModal={setShowModal} />

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Discover"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor: 'white',
            tabBarInactiveBackgroundColor: 'white'
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" color="black" size={24} />
              )
            }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" color="black" size={24} />
              )
            }}
          />
          <Tab.Screen
            name="Camera"
            component={CameraStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="plussquare" color="black" size={24} />
              )
            }}
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                e.preventDefault();
                setShowModal(true);
              }
            })}
          />
          <Tab.Screen
            name="Inbox"
            component={InboxStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="message1" color="black" size={24} />
              )
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" color="black" size={24} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
