import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import { Header, Badge } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import { blacklogo, mastercard, mastercard1, whatsapp } from "../../../assets";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTab from "../../../components/BottomTab";
import colors from "../../../theme/colors";
import { ScrollView } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const Wallet = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        containerStyle={{}}
        backgroundColor={"transparent"}
        leftComponent={
          <Octicons name={"three-bars"} size={30} color={"black"} style={{}} />
        }
        centerComponent={
          <Image
            source={blacklogo}
            resizeMode="contain"
            styles={{ width: 50, height: 50 }}
          />
        }
        rightComponent={
          <MaterialCommunityIcons
            name={"gift"}
            size={30}
            color={"black"}
            style={{}}
          />
        }
      />
      {/* <Badge
        size={100}
        status="warning"
        value="1"
        containerStyle={{
          position: 'absolute',
          right: 27,
          top:Platform.OS=="ios"?22: 42,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      /> */}

      <View
        style={{
          alignItems: "center",
          marginVertical: Platform.OS == "ios" ? 20 : 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          Wallet
        </Text>
        <Entypo
          name={"cross"}
          size={30}
          color={"black"}
          style={{ position: "absolute", right: 7 }}
        />
      </View>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              marginTop: 30,
            }}>
            Write amount to add
          </Text>
        </View>
        <TextInput
          style={styles.input}
          textAlign="center"
          textAlignVertical="center"
          placeholderTextColor={'black'}
          keyboardType={'number-pad'}
        />
        {/* <View style={{ marginTop: 10 }}>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
            <Text
              style={{
                paddingVertical: 15,

                paddingLeft: 10,
                fontSize: 16,
              }}
            >
              $200
            </Text>
          </View>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
            <Text
              style={{
                paddingVertical: 15,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                paddingLeft: 10,
                fontSize: 16,
              }}
            >
              $500
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>$1000</Text>
            <AntDesign
              name="checkcircleo"

              color={"green"}
              size={20}
            />
          </View>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
            <Text
              style={{
                paddingVertical: 15,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                paddingLeft: 10,
                fontSize: 16,
              }}
            >
              $1500
            </Text>
          </View>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
            <Text
              style={{
                paddingVertical: 15,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                paddingLeft: 10,
                fontSize: 16,
              }}
            >
              Type
            </Text>
          </View>
        </View> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop:Platform.OS=="ios"?20: 40,
          }}
        >
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#d9d9d9",
                padding: 6,
                borderRadius: 20,
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black" }}>Add Payment method</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              paddingLeft: 25,
              justifyContent: "center",
            }}
          >
            <Image source={mastercard1} />
            <Text
              style={{
                color: colors.primary,
                paddingLeft: 15,
              }}
            >
              Master Card
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.secondary,
            marginHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            padding: 13,
            borderRadius: 22,
            marginTop:Platform.OS=="ios"?180: 70,
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
            Update
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 80,
            marginTop: 20,
          }}
        >
          <Image source={whatsapp} style={{ width: 90, height: 90 }} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F4F4F4",
    height: 50,
    marginVertical: 30,
  },
});
