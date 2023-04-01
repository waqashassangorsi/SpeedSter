import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-native-phone-number-input";
import { logo, logo1, logo2 } from "../../../assets";
import { CommonActions } from "@react-navigation/routers";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/auth";
import { connect } from "react-redux";
import { Loading } from "../../../components/Loading";
import { signup } from "../../../redux/actions/auth";
const Phoneverify = ({ route, signup }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setotp] = useState("");
  const [showview, setshowview] = useState(0);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const navigation = useNavigation();
  const phoneInput = useRef(null);
  console.log("first", phoneNumber);
  const { Password, Email, Name, Cnf } = route.params;
  console.log("checkphonenum", Password, Email, Name, Cnf);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("first", user._user.phoneNumber);
        if (user._user.phoneNumber == phoneNumber) {
          submitform();
        }
      }
    });
  }, []);

  const subbmitotp = async () => {
    setLoading(true);
    let promise = new Promise((rsl, rej) => {
      confirm
        .confirm(otp)
        .then((confirmResult) => {
          submitform();
          rsl(confirmResult);
          setLoading(false);
        })
        .catch((error) => {
          rej(error.message);
          setLoading(false);
        });
    });
    promise.catch((err) => {
      alert(err);
      setLoading(false);
    });
  };
  const showView = async () => {
    setLoading(true);
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    if (confirmation) {
      setshowview(1);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const submitform = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("mobile_no", phoneNumber);
    formData.append("password", Password);
    formData.append("name", Name);
    formData.append("email", Email);
    formData.append("status", 3);
    console.log("formData", formData);
    const res = await signup(formData);
    console.log("response", res);
    if (res.data.status == true) {
      setLoading(false);
      setshowview(0);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "VehicleRegister" }],
        })
      );
    } else {
      setLoading(false);
      alert(res.data.message);
      setshowview(0);
      navigation.navigate("SignupCopy");
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Loading visible={loading} />
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
          // resizeMode="contain"
          // styles={{width: 100, height: 100}}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Phone Verification
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
            marginTop: 20,
            overflow: "hidden",
            paddingBottom: 5,
          }}
        >
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="PK"
            layout="first"
            // withShadow

            containerStyle={styles.phoneNumberView}
            textContainerStyle={{
              paddingVertical: 0,
              backgroundColor: "#fff",
              height: 50,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
              borderRadius: 3,
              borderBottomWidth: 1,
              borderBottomColor: "black",
            }}
            countryPickerButtonStyle={{
              backgroundColor: "#fff",
              height: 50,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
              borderRadius: 3,
              borderBottomWidth: 1,
              borderBottomColor: "black",
              marginRight: 10,
            }}
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
          />
          <TouchableOpacity
            onPress={() => showView()}
            style={{
              backgroundColor: "#aa2222",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              width: "15%",
              height: 50,
              position: "absolute",
              right: 0.5,
              borderRadius: 5,
              bottom: 4.5,
            }}
          >
            <FontAwesome5
              name="chevron-right"
              size={25}
              color="white"
              style={{ alignSelf: "center", paddingTop: 10 }}
            />
          </TouchableOpacity>
        </View>

        {showview == 1 && (
          <View>
            <TouchableOpacity onPress={() => showView()}>
              <Text
                style={{
                  textAlign: "right",
                  paddingHorizontal: 20,
                  color: "#aa2222",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                Resend Code
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                paddingHorizontal: 10,
                color: "black",
                fontWeight: "bold",
                fontSize: 16,
                paddingVertical: 15,
                paddingTop: 20,
              }}
            >
              Enter four digit verification code
            </Text>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <OTPTextInput
            textInputStyle={{backgroundColor: '#d9d9d9', borderRadius: 5}}
            tintColor={'#d9d9d9'}
          /> */}
              <OTPInputView
                pinCount={6}
                style={{ width: "90%", height: 60 }}
                codeInputFieldStyle={styles.underlineStyleBase}
                code={otp}
                placeholderTextColor={"black"}
                onCodeChanged={(e) => setotp(e)}
              />
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
                onPress={() => subbmitotp()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#df0300",
                  width: "50%",
                  height: 30,
                  borderRadius: 7,
                  marginTop: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 1, height: 1 },
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 4,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            marginTop: Platform.OS == "ios" ? 130 : 20,
          }}
        >
          <View>
            <Text style={{ color: "black" }}>Already have an account?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const { user } = state.auth;
  return { user };
};
export default connect(mapStateToProps, {
  signup,
})(Phoneverify);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  phoneNumberView: {
    width: "100%",
    height: 50,
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    backgroundColor: "#D9D9D9",
    color: "black",
  },
});
