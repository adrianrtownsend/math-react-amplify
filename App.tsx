// React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// AWS
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'
import config from './src/aws-exports'
Amplify.configure(config)

// Theme
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation';
import { NativeBaseProvider } from 'native-base';

// Context
import { AppProvider } from './AppContext'

const App = () => {
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <AppProvider>
            <TabNavigator />
          </AppProvider>
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App