import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ClassesScreen from '../screens/Classes'
import ClassScreen from '../screens/Class'
import AssignmentScreen from '../screens/Assignment'
import ProfileScreen from '../screens/Profile'

// Classes Navigator
const ClassesStack = createNativeStackNavigator()
const ClassesStackNavigator = () => (
  <ClassesStack.Navigator screenOptions={{ headerShown: false }}>
    <ClassesStack.Screen name="Classes" component={ClassesScreen} />
    <ClassesStack.Screen name="Class" component={ClassScreen} />
    <ClassesStack.Screen name="Assignment" component={AssignmentScreen} />
  </ClassesStack.Navigator>
)

// Classes & Profile
const RootTab = createBottomTabNavigator()
const RootTabNavigator = () => (
  <RootTab.Navigator screenOptions={{ headerShown: false }}>
    <RootTab.Screen name="Classes" component={ClassesStackNavigator} />
    <RootTab.Screen name="Profile" component={ProfileScreen} />
  </RootTab.Navigator>
)

export default RootTabNavigator;