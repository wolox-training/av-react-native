/**
 * @format
 */

import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';
import('./src/config/reactotronConfig.ts');

AppRegistry.registerComponent(appName, () => App);
