import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from 'native-base';

import ProfileScreen from '../screens/Profile';
import { Auth } from 'aws-amplify';
import { Button } from 'react-native';

const signOut = async () => {
  try {
    await Auth.signOut()
  } catch(error) {
    console.log('error signing out: ', error)
  }
}

function HomeScreen() {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Button onPress={()=> signOut()}>
          Sign Out
      </Button>
      <Text>Open up App.js to start working on your app!</Text>
    </Box>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;