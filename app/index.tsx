import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '@/screens/Home';
import Menu from '@/screens/Menu';
import { Provider } from 'react-redux';
import store from '@/components/redux/store';
import Cart from '@/screens/Cart';
import Login from '@/screens/Login';
import SignUp from '@/screens/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}> 
      <NavigationIndependentTree>
        <NavigationContainer> 
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </Provider>
  );
}
