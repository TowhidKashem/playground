import React, { useState } from 'react';
import { Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import { AntDesign } from '@expo/vector-icons';

import Discover from './src/Discover/Discover';
import Home from './src/Home/Home';
import Inbox from './src/Inbox/Inbox';
import Profile from './src/Profile/Profile';
import Friends from './src/Profile/Friends/Friends';
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
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation, route }) => ({
        title: 'Towhid Kashem',
        headerLeft: () => (
          <Pressable onPress={() => navigation.navigate('Friends')}>
            <AntDesign name="adduser" size={24} color="black" />
          </Pressable>
        ),
        headerRight: () => (
          <>
            <AntDesign
              name="calendar"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
            <AntDesign name="bars" size={24} color="black" />
          </>
        )
      })}
    />
    <NativeStack.Screen
      name="Friends"
      component={Friends}
      options={({ navigation, route }) => ({
        title: 'Find friends',
        headerLeft: () => (
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
        ),
        headerRight: () => (
          <AntDesign
            name="qrcode"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
        )
      })}
    />
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
            name="HomeTab"
            component={HomeStack}
            options={{
              title: 'Home',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" color="black" size={24} />
              )
            }}
          />
          <Tab.Screen
            name="DiscoverTab"
            component={DiscoverStack}
            options={{
              title: 'Discover',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" color="black" size={24} />
              )
            }}
          />
          <Tab.Screen
            name="CameraTab"
            component={CameraStack}
            options={{
              title: 'Camera',
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
            name="InboxTab"
            component={InboxStack}
            options={{
              title: 'Inbox',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="message1" color="black" size={24} />
              )
            }}
          />
          <Tab.Screen
            name="ProfileTab"
            component={ProfileStack}
            options={{
              title: 'Profile',
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
