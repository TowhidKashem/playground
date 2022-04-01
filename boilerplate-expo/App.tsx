import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import Discover from './src/Discover/Discover';
import Home from './src/Home/Home';
import Inbox from './src/Inbox/Inbox';
import Profile from './src/Profile/Profile';
import CameraModal from './src/Camera/Camera';

const Tab = createBottomTabNavigator();

const ROUTES = {
  home: {
    name: 'Home',
    component: Home,
    icon: 'home'
  },
  discover: {
    name: 'Discover',
    component: Discover,
    icon: 'search1'
  },
  camera: {
    name: 'Camera',
    component: CameraModal, // Won't be used
    icon: 'plussquare'
  },
  inbox: {
    name: 'Inbox',
    component: Inbox,
    icon: 'message1'
  },
  profile: {
    name: 'Profile',
    component: Profile,
    icon: 'user'
  }
};

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
          {Object.keys(ROUTES).map((route) => {
            const conditionalProps =
              route === 'camera'
                ? {
                    listeners: ({ navigation }) => ({
                      tabPress: (e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }
                    })
                  }
                : {};
            return (
              <Tab.Screen
                key={route}
                name={route}
                component={ROUTES[route].component}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign
                      name={ROUTES[route].icon}
                      color="black"
                      size={24}
                    />
                  )
                }}
                {...conditionalProps}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
