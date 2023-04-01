import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { logo1 } from "../../../assets";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import messaging from "@react-native-firebase/messaging";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import {
  notificationListener,
  requestUserPermission,
} from "../../../components/Notificationservice";
const SignupCopy = () => {
  const navigation = useNavigation();
  const [name, setname] = useState("Waqas");
  const [email, setemail] = useState("waqas@gmail.com");
  const [pass, setpass] = useState("123");
  const [cnf, setcnf] = useState("123");
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      console.log("remoteMessageforeground", remoteMessage);
      if (Platform.OS == "android") {
        PushNotification.localNotification({
          /* Android Only Properties */
          channelId: "my_channel", // (required) channelId, if the channel doesn't exist, notification will not trigger.
          id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
          title: remoteMessage.data, // (optional)
          message: remoteMessage.notification.body, // (required)
        });
      } else {
        PushNotificationIOS.addNotificationRequest({
          id: "my_channel",
          body: remoteMessage.notification.body,
          // sound: "default",
        });
      }
      alert(remoteMessage.notification.body);
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("push notification 3", remoteMessage); //jb background me hogi app to ye fire hoga
      alert("success");
    });
  }, [notificationListener]);

  const handleSignup = async () => {
    if (!name) {
      alert("Please enter your phone number");
    } else if (!email) {
      alert("Please enter your email");
    } else if (!pass) {
      alert("Please enter your password");
    } else if (!cnf) {
      alert("Please enter your  confirm password ");
    } else if (cnf !== pass) {
      alert("password and confirm password does not match");
    } else {
      setname("");
      setemail("");
      setpass("");
      setcnf("");

      navigation.navigate("Phoneverify", {
        Email: email,
        Password: pass,
        Name: name,
        Cnf: cnf,
      });
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 70,
        }}
      >
        <Image
          source={logo1}
          resizeMode="contain"
          styles={{ width: 100, height: 100 }}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* <View style={{flex: 1, backgroundColor: 'white'}}> */}
        <View style={{ overflow: "hidden", paddingBottom: 5 }}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={"black"}
            onChangeText={(e) => setname(e)}
            value={name}
          />
          <Octicons
            style={styles.person}
            name="person"
            size={20}
            color="#000"
          />
        </View>
        <View style={{ overflow: "hidden", paddingVertical: 5 }}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={"black"}
            onChangeText={(e) => setemail(e)}
            value={email}
          />
          <Fontisto style={styles.call} name="email" size={20} color="#000" />
        </View>
        <View style={{ overflow: "hidden", paddingBottom: 8 }}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={"black"}
            onChangeText={(e) => setpass(e)}
            value={pass}
            secureTextEntry={true}
          />

          <MaterialIcons
            style={styles.lock}
            name="lock-open"
            size={20}
            color="#000"
          />
          <Feather style={styles.eye} name="eye-off" size={20} color="#000" />
        </View>
        <View style={{ overflow: "hidden", paddingBottom: 5 }}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={"black"}
            onChangeText={(e) => setcnf(e)}
            value={cnf}
            secureTextEntry={true}
          />
          <MaterialIcons
            style={styles.lock1}
            name="lock-open"
            size={20}
            color="#000"
          />
          <Feather style={styles.eye1} name="eye-off" size={20} color="#000" />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ color: "#4dcc57", fontWeight: "bold" }}>
            Password matched
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            paddingBottom: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => handleSignup()}
            // onPress={() => navigation.navigate("Home")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#df0300",
              width: "50%",
              height: 30,
              borderRadius: 7,
              marginTop: 30,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 70,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "black" }}>Already have an account?</Text>
          <Text
            style={{
              color: "#df0300",
              fontWeight: "bold",
              fontSize: 16,
              paddingLeft: 5,
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupCopy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginHorizontal: 10,

    borderRadius: 3,

    backgroundColor: "#fff",
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },
  person: { position: "absolute", left: 20, top: 15 },
  call: { position: "absolute", top: 20, left: 20 },
  lock: { position: "absolute", top: 15, left: 20 },
  lock1: { position: "absolute", top: 15, left: 20 },
  eye: { position: "absolute", right: 20, top: 15 },
  eye1: { position: "absolute", right: 20, top: 15 },
});
