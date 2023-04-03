import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { Header, Badge } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import colors from "../../../theme/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { blacklogo, Person1, whatsapp } from "../../../assets";
import BottomTab from "../../../components/BottomTab";
import { ScrollView } from "react-native-gesture-handler";
const DriverCompliments = () => {
  return (
    <View style={{ flex: 1 }}>
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
          right:  27,
          top: Platform.OS=="ios"?22:40,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      /> */}
      <ScrollView style={{ marginBottom: 50 }}>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Image
            source={Person1}
            style={{ borderRadius: 20, height: 130, width: 130 }}
            resizeMode="cover"
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "black",
              paddingTop: 30,
            }}
          >
            John Adams
          </Text>
          <Entypo
            name={"cross"}
            size={30}
            color={"black"}
            style={{ position: "absolute", right: 7 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 5,
            justifyContent: "space-around",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              width: Platform.OS == "ios" ? "40%" : "45%",
              backgroundColor: "#d9d9d9",
              padding: 7,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                4.1
              </Text>
              <Entypo
                name="star"
                color={"yellow"}
                size={16}
                style={{ paddingLeft: 3 }}
              />
            </View>
            <Text style={{ fontSize: 16, color: "black", textAlign: "center" }}>
              Rating & Reviews
            </Text>
          </View>
          <View
            style={{
              width: Platform.OS == "ios" ? "40%" : "45%",
              backgroundColor: "#d9d9d9",
              padding: 7,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
              }}
            >
              1 Year
            </Text>
            <Text style={{ fontSize: 16, color: "black", textAlign: "center" }}>
              Driving since
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 30,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto name="world-o" size={20} />
            <Text style={{ paddingLeft: 20, color: "black" }}>
              Speaks English
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <FontAwesome
              name="map-marker"
              size={24}
              style={{ paddingLeft: 3 }}
            />
            <Text style={{ paddingLeft: 23, color: "black" }}>
              From Los Angeles
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
            Customer Compliments
          </Text>
          <View style={{ flexDirection: "row", paddingVertical: 20 }}>
            <View style={{}}>
              <Image
                source={Person1}
                style={{ height: 100, width: 100, borderRadius: 100 / 2 }}
                resizeMode="contain"
              />
              <Text style={{ color: "black", paddingTop: 10 }}>
                5 Star service
              </Text>
            </View>
            <View style={{ paddingLeft: 30 }}>
              <Image
                source={Person1}
                style={{ height: 100, width: 100, borderRadius: 100 / 2 }}
                resizeMode="contain"
              />
              <Text style={{ color: "black", paddingTop: 10 }}>
                Good Behaviour
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 10,
          }}
        >
          <Image source={whatsapp} style={{ width: 90, height: 90 }} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default DriverCompliments;

const styles = StyleSheet.create({});
