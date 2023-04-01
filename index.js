/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import PushNotification, { Importance } from "react-native-push-notification";

//Creating Channel Start
PushNotification.createChannel(
  {
    channelId: "my_channel32", // (required)
    channelName: "my_channel32", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
    // soundName: "my_hello.wav", // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    // vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    playSound: true,
  },
  (created) => {} // (optional) callback returns whether the channel was created, false means it already existed.
);
// PushNotification.getChannels(function (channel_ids) {
//   console.log("checkchannelid", channel_ids);
// });
//Creating Channel End

// Register background handler
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log("Message handled in the background!", remoteMessage);
// });

AppRegistry.registerComponent(appName, () => App);
