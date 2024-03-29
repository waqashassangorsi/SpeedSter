import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Zocial from "react-native-vector-icons/Zocial";
import { Loading } from "../../../components/Loading";
import { signin } from "../../../redux/actions/auth";
import { fb, google, logo1 } from "../../../assets";
import colors from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

const Login = ({ signin }) => {
  const navigation = useNavigation();
  const [number, setnumber] = useState("");
  const [pass, setpass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!number) {
      alert("Kindly Enter your number");
    } else if (!pass) {
      alert("Kindly Enter Password");
    } else {
      // setLoading(true);
      const formData = new FormData();
      formData.append("mobile_no", number);
      formData.append("password", pass);
      formData.append("status", "3");
      console.log("LoginData", formData);
      try {
        const res = await signin(formData);
        console.log("response", res);
        if (res.data.status === true) {
          navigation.navigate("Home");
          setLoading(false);
        } else {
          alert(res.data.message);
          setLoading(false);
        }
      } catch (e) {
        alert(e);
      }
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
          marginVertical: 100,
        }}
      >
        <Image
          source={logo1}
          resizeMode="contain"
          styles={{ width: 100, height: 100 }}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "white", marginTop: 20 }}>
        {/* <View style={{flex: 1, backgroundColor: 'white'}}> */}

        <View style={{ overflow: "hidden", paddingBottom: 5 }}>
          <TextInput
            style={styles.input}
            placeholder="Number"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={"black"}
            onChangeText={(e) => setnumber(e)}
            value={number}
          />

          <Octicons style={styles.person} name="person" size={20} />
        </View>
        <View style={{ overflow: "hidden", paddingBottom: 5 }}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={"black"}
            onChangeText={(e) => setpass(e)}
            value={pass}
          />
          <MaterialIcons
            style={styles.lock1}
            name="lock-open"
            size={20}
            color="#000"
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <View
            style={{ width: "50%", flexDirection: "row", alignItems: "center" }}
          >
            <MaterialCommunityIcons
              name="checkbox-blank-outline"
              color={"black"}
              size={16}
            />
            <Text style={{ paddingLeft: 3, color: "black" }}>Remember me</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPassword")}
            style={{ width: "50%", alignItems: "flex-end" }}
          >
            <Text style={{ color: "black" }}>Forgot password?</Text>
          </TouchableOpacity>
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
            onPress={() => handleLogin()}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.secondary,
              width: "50%",
              height: 30,
              borderRadius: 7,
              marginTop: 60,
              elevation: 8,
              borderRadius: 3,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 40,
          }}>
          <View style={{}}>
            <Image source={fb} />
          </View>
          <View style={{paddingLeft: 10}}>
            <Image source={google} />
          </View>
        </View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            marginTop: Platform.OS == "ios" ? 120 : 20,
          }}
        >
          <View>
            <Text style={{ color: "black" }}>Don't have an account?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("SignupCopy")}>
            <Text
              style={{
                color: "#df0300",
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: 5,
              }}
            >
              Sign Up
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
  signin,
})(Login);

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
  call: { position: "absolute", top: 25, left: 20 },
  lock: { position: "absolute", top: 15, left: 20 },
  lock1: { position: "absolute", top: 15, left: 20 },
  eye: { position: "absolute", right: 20, top: 25 },
  eye1: { position: "absolute", right: 20, top: 25 },
});
