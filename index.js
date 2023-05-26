import 'react-native-gesture-handler';
import {Text, AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';

//for responsivnes
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

messaging().setBackgroundMessageHandler(async remoteMessage => {
    
});
AppRegistry.registerComponent(appName, () =>App);
