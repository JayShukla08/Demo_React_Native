import React, {useEffect,useState} from 'react'
import { Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Screens
import LoginPage from './components/LoginPage';
import Welcome from './components/Welcome';
import CourseRegistration from './components/CourseRegistration';
import LoginDemo from './components/LoginDemo';
import Notifications from './components/Notifications';
import GradeCard from './components/GradeCard';
import MyComp from './components/MyComp';
// For stack navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// For parameter types in stack navigation
export type RootStackParamList = {
  LoginDemo: undefined;
  LoginPage: undefined;
  Welcome: undefined;
  CourseRegistration: undefined;
  Notifications: undefined;
  GradeCard: undefined;
  MyComp: undefined;
};

// Create stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppPro = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginDemo" component={LoginDemo} options={{headerShown: false,}}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false,}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false,}}/>
        <Stack.Screen name="CourseRegistration" component={CourseRegistration} options={{headerShown: false,}}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false,}}/>
        <Stack.Screen name="GradeCard" component={GradeCard} options={{headerShown: false,}}/>
        <Stack.Screen name="MyComp" component={MyComp} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppPro;
