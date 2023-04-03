import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { Header, Badge } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import colors from "../../../theme/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  blacklogo,
  delivery,
  Persons,
  tick,
  watch,
  whatsapp,
} from "../../../assets";
import BottomTab from "../../../components/BottomTab";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Parcel = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        containerStyle={{}}
        backgroundColor={"transparent"}
        leftComponent={
          <Octicons
            name={"three-bars"}
            size={30}
            color={"black"}
            style={{}}
            onPress={() => navigation.openDrawer()}
          />
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
          top: 40,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      /> */}
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            Track Parcel
          </Text>
          <Entypo
            name={"cross"}
            size={30}
            color={"black"}
            style={{ position: "absolute", right: 7, bottom: 1 }}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.secondary,
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 15,
            marginTop: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              Estimated Time
            </Text>
            <Text style={{ color: "white", textAlign: "center" }}>
              30 minutes
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Status
            </Text>
            <Text style={{ color: "white", textAlign: "center" }}>
              On the way
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <View style={{ width: "20%", alignItems: "center" }}>
            {/* <Fontisto
              name="stopwatch"
              color={colors.secondary}
              size={22}
              style={{paddingTop: 7}}
            /> */}
            <Image source={watch} style={{marginTop:10}} />
          </View>
          <View style={{ width: "50%" }}>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              Pick-up
            </Text>
            <Text>Order is picked</Text>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              width: "30%",
              alignItems: "flex-end",
              paddingRight: 15,
            }}
          >
            <Text>11:30am</Text>
          </View>
        </View>
        <View
          style={{
            borderLeftWidth: 2,
            borderLeftColor: colors.secondary,
            marginHorizontal: 40,
            height: 100,
          }}
        ></View>
        <View style={{ flexDirection: "row", marginTop: 7 }}>
          <View style={{ width: "20%", alignItems: "center" }}>
            {/* <MaterialIcons

              name="delivery-dining"
              color={colors.secondary}
              size={22}
              style={{paddingTop: 7}}
            /> */}
            <Image source={delivery} />
          </View>
          <View style={{ width: "50%" }}>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              On the way
            </Text>
            <Text>Your order is on the way</Text>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              width: "30%",
              alignItems: "flex-end",
              paddingRight: 15,
            }}
          >
            <Text>11:30am</Text>
          </View>
        </View>
        <View
          style={{
            borderLeftWidth: 2,
            borderLeftColor: colors.secondary,
            marginHorizontal: 40,
            height: 90,
            marginTop:-10
          }}
        ></View>
        <View style={{ flexDirection: "row", marginTop: 7 }}>
          <View style={{ width: "20%", alignItems: "center" }}>
            {/* <MaterialIcons
              name="delivery-dining"
              color={colors.secondary}
              size={22}
              style={{paddingTop: 7}}
            /> */}
            <Image source={tick} />
          </View>
          <View style={{ width: "50%" }}>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              Delivered
            </Text>
            <Text>Your order is delivered</Text>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              width: "30%",
              alignItems: "flex-end",
              paddingRight: 15,
            }}
          >
            <Text>11:30am</Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 80,
            marginTop:Platform.OS=="ios"?40:0
          }}
        >
          <Image source={whatsapp} style={{ width: 90, height: 90 }} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Parcel;

const styles = StyleSheet.create({});
