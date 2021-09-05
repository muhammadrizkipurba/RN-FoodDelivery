import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import CustomDrawer from './navigation/CustomDrawer/CustomDrawer'
import { Provider } from 'react-redux'
import store from './redux/globalStore'
import RNBootSplash from 'react-native-bootsplash';


const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;