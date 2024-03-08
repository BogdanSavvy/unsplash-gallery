import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './src/redux/store';
import WelcomeScreen from './src/screens/welcomeScreen';
import GalleryScreen from './src/screens/galleryScreen';
import PhotoScreen from './src/screens/photoScreen';

function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ header: () => <></> }}
          />
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="Photo" component={PhotoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
