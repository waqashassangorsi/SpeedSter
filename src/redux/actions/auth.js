import axios from "axios";

import auth from "@react-native-firebase/auth";
import { storeurl } from "./storeurl";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  PROFILE_INFO,
  TRANSLATION,
  Setlanguage,
} from "../actions/types";
import { Alert } from "react-native";

export const authState = (rsl, rej) => {
  return (dispatch) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        rsl(user);
        try {
          setTimeout(() => {
            auth().signOut();
          }, 60000);
        } catch {}
      }
    });
  };
};
////////////////////////////////////////////////////////////////////apis

export const apppushnotification = (mydata) => {
  return async (dispatch) => {
    let title = "Taximat";
    let sound = "default";
    let android_channel_id = "my_channel32";
    let scree_name = mydata.scree_name;
    let messagekey = mydata.messagekey;
    let receiverid = mydata.receiverid;
    let screen = mydata.screen;
    let dname = mydata.dname;
    let devicetokennew = mydata.device_token;
    let to = mydata.token;
    let body = mydata.body;
    const headers = {
      Authorization: `key=AAAAD3PmW7A:APA91bGK_INKNDII1BS5GrvKvXlYsNX3nwMsbCA7f23vDKdmJQbvp1O0dZ8WKbK2ni-zAfzyK0NdNoE4UbUhI4nCC7JJysYw51eA71hpaL9Qx1J8iC2sP8jl2qX6bSJDAehOcADZxUWq`,
      "Content-Type": "application/json",
    };
    const bodyToSend = JSON.stringify({
      to: to,
      notification: {
        title,
        body,
        sound,
        android_channel_id,
      },
      data: {
        scree_name,
        messagekey,
        receiverid,
        screen,
        dname,
        devicetokennew,
      },
    });

    const res = await axios({
      method: "post",
      url: "https://fcm.googleapis.com/fcm/send",
      headers: headers,
      data: bodyToSend,
    });
    return res;
  };
};

//////////////////////updatetoken///////////////////////

export const updatetoken = (data, navigation) => {
  return async (dispatch) => {
    const res = await axios.post(`${storeurl}updatetoken`, data, {});
    console.log("fomData===>123456", res);
    if (res.data.status == true) {
      if (res.data.data.user_privilidge == 1) {
        dispatch({
          type: LOGOUT_USER,
        });
        navigation.navigate("Signup");
      } else {
        dispatch({
          type: PROFILE_INFO,
          user: res.data.userdata,
          isLoggedIn: true,
        });
      }
    }

    return res;
  };
};

//////////////////////////////////////////
export const signInWithPhone = (phone) => {
  return async (dispatch) => {
    const res = await auth().signInWithPhoneNumber(phone);
    return res;
  };
};

export const confirmOTP = (otp, confirmation, rsl, rej) => {
  console.log("conformation from api1", otp, confirmation);
  return async (dispatch) => {
    const res = await confirmation.confirm(otp);
    console.log("conformation from api2", res);

    return res;
  };
};

export const signin = (data) => {
  return async (dispatch) => {
    const res = await axios.post(
      `${storeurl}Authentication/login_user`,
      data,
      {}
    );
    console.log("response from auth", res);
    // if (res.data.status == true) {
    //   if (res.data.data.user_privilidge == 1) {
    //     alert("Your account is blocked");
    //   } else {
    //     dispatch({
    //       type: LOGIN_USER,
    //       user: res.data.data,
    //       isLoggedIn: true,
    //     });
    //     return res;
    //   }
    // } else {
    return res;
    // }
  };
};

export const signup = (data) => {
  return async (dispatch) => {
    const res = await axios.post(
      `${storeurl}Authentication/signup_user`,
      data,
      {}
    );
    if (res.data.status == true) {
      if (res.data.data.user_privilidge == 1) {
        alert("Your account is blocked");
      } else {
        dispatch({
          type: LOGIN_USER,
          user: res.data.data,
          isLoggedIn: true,
        });
        return res;
      }
    } else {
      dispatch({
        type: LOGIN_USER,
        isLoggedIn: false,
      });
      return res;
    }
  };
};

export const logoutSuccess = (rsl, rej) => {
  console.log("logiut is ", rsl);
  return (dispatch) => {
    try {
      dispatch({
        type: LOGOUT_USER,
      });
      rsl();
    } catch (err) {
      rej(err.message);
    }
  };
};
