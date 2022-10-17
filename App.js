import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';
import AuthNavigator from './src/routes/AuthNavigator';
import { LogBox } from 'react-native';
import DrawerNavigation from './src/routes/AuthNavigator'

LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs(); 

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={{ flex: 1 }}>
          
          <AuthNavigator />
          
        </SafeAreaView>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
