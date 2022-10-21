import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Routes/Router'

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
