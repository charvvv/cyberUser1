import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogPosts from './BlogPosts'; 
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BlogPosts">
        <Stack.Screen name="BlogPosts" component={BlogPosts} options={{ title: 'Cyber Blog' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
