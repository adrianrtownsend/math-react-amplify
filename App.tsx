// React Native
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, /*Text,*/ View, TextInput, /*Button*/ } from 'react-native';

// AWS
import { Amplify, API, Auth, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'
import config from './src/aws-exports'
Amplify.configure(config)

// Theme
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Text, Box, Button } from 'native-base';

const App = () => {

  const signOut = async () => {
    try {
      await Auth.signOut()
    } catch(error) {
      console.log('error signing out: ', error)
    }
  }
  
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Button colorScheme="cyan" _text={{color: 'white' }} onPress={()=> signOut()}>
              Sign Out
          </Button>
          <Text>Open up App.js to start working on your app!</Text>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App