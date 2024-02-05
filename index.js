/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//app registery is registering a component whose name is appName (taken from app.json) 
//and the method we are running there is App taken from App.tsx
