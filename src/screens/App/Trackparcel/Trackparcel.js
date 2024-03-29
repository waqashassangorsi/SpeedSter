import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { Header, Badge } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
// import Modal from 'react-native-modal';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AlertModal from "../../../components/AlertModal";
import {
  blacklogo,
  cross,
  menu,
  Person1,
  Persons,
  whatsapp,
  call,
  cross1,
  messagedp,
  startmarker,
  endmarker,
} from "../../../assets";
import BottomTab from "../../../components/BottomTab";
import RBSheet from "react-native-raw-bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../../theme/colors";

const Trackparcel = () => {
  const refRBSheet = useRef();
  // const [isModalVisible, setModalVisible] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 33.684422, ////42.7339
    longitude: 73.047882, ////25.4858
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [coordinates] = useState([
    {
      latitude: 33.597833952195714,
      longitude: 73.04623526185422,
    },
    {
      latitude: 33.664024011449236,
      longitude: 73.08680157543795,
    },
  ]);
  const GOOGLE_API_KEY = "AIzaSyBZmuNL-9NHHZSvuQPb4hsBqP5pJBm8-QM";
  const [showAlert, setShowAlert] = useState(false);
  return (
    <View style={styles.container}>
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
          position: "absolute",
          right: 27,
          top: 42,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      /> */}
      <View
        style={{
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          Track Parcel
        </Text>
      </View>
      <Entypo
        name={"cross"}
        size={30}
        color={"black"}
        style={{ position: "absolute", right: 6, top: 106 }}
      />
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {/* <Marker
          coordinate={region}
          pinColor={'red'} // any color
          title={'title'}
          description={'description'}
        /> */}
        {/* <Polyline
          coordinates={[
            { latitude: 33.597833952195714, longitude: 73.04623526185422 },
            { latitude: 33.664024011449236, longitude: 73.08680157543795 },
            // { latitude: 37.72825, longitude: -122.4324 },
          ]}
          strokeColor="#7F0000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            "#7F0000",
            "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
            "#B24112",
            "#E5845C",
            "#238C23",
            "#7F0000",
          ]}
          strokeWidth={6}
          lineCap="round"
        /> */}
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_API_KEY} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={coordinates[0]}>
          <Image
            source={startmarker}
            style={{ width: 60, height: 60, marginLeft: -10, marginTop: 7 }}
            resizeMode="contain"
          />
        </Marker>
        <Marker coordinate={coordinates[1]}>
          <Image source={endmarker} style={{ width: 50, height: 50 }} />
        </Marker>
      </MapView>
      <TouchableOpacity
        onPress={() => setModalVisible2(true)}
        style={{
          position: "absolute",
          right: 8,
          bottom: 430,
        }}
      >
        <Image source={whatsapp} />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#c70118",
          right: 17,
          bottom: 400,
          width: "45%",
          padding: 8,
          borderRadius: 18,
        }}
      >
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={{ alignItems: "center" }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Cancel Request
          </Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        height={350}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          wrapper: {
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          },
        }}
      >
         <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            marginTop: 20,
          }}
        >
          <AntDesign name="arrowleft" color={"black"} size={20} />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Cancel Delivery
          </Text>
          <Entypo name={"cross"} size={20} color={"black"} />
        </View>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            paddingVertical: 20,
            fontWeight: "bold",
          }}
        >
          Why do you want to cancel?
        </Text>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
            <Text
              style={{
                color: "black",

                paddingBottom: 15,
              }}
            >
              Requested by an accident?
            </Text>
          </View>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
            <Text
              style={{
                color: "black",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}
            >
Selected wrong locatin?            </Text>
          </View>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
            <Text
              style={{
                color: "black",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                fontWeight: "bold",
                paddingVertical: 15,
              }}
            >
              Driver is too far away?
            </Text>
          </View>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
            <Text
              style={{
                color: "black",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                paddingVertical: 10,
              }}
            >
              Driver isn't available?
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                color: "black",

                paddingVertical: 15,
              }}
            >
              May be next time?
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              padding: 9,
              marginVertical: 20,
              marginHorizontal: 80,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white" }}>Confirm Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </RBSheet>
      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          marginHorizontal: 15,
          paddingVertical: 20,
          bottom: 285,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "60%", paddingLeft: 15 }}>
            <Text
              style={{
                color: colors.secondary,
                fontSize: 16,
              }}
            >
              Your driver has arrived!
            </Text>
          </View>
          <View style={{ width: "40%", alignItems: "center" }}>
            <Text
              style={{
                color: colors.secondary,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              5 min
            </Text>
            <Text style={{ color: colors.secondary }}>Waiting Time</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#C70118",
          marginHorizontal: 15,
          paddingVertical: 20,
          bottom: 180,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%", paddingLeft: 15 }}>
            <Fontisto name={"stopwatch"} size={22} color={"white"} style={{}} />
          </View>
          <View style={{ width: "50%", paddingLeft: 25 }}>
            <Foundation name={"marker"} size={22} color={"white"} style={{}} />
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <View style={{ width: "50%", paddingLeft: 35 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              12:40 PM
            </Text>
            <Text style={{ color: "white" }}>Delivery Time</Text>
          </View>
          <View style={{ width: "50%", paddingLeft: 45 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Naud St
            </Text>
            <Text style={{ color: "white" }}>Delivery Place</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#c70118",
          bottom: 79,
          paddingVertical: 20,
          marginHorizontal: 7,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              width: "25%",
              // backgroundColor: 'blue',
            }}
          >
            <Image
              source={Person1}
              style={{ width: 60, height: 60, borderRadius: 30 / 2 }}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("DriverCompliments")}
            style={{
              width: "40%",
              // backgroundColor: 'pink',
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                paddingTop: 6,
              }}
            >
              John Adams
            </Text>
            <Text style={{ color: "white" }}>Driver</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => setModalVisible(true)}
            style={{
              width: "15%",
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              height: 45,
              borderRadius: 7,
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name={"message-text-outline"}
              size={20}
              color={"red"}
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible1(true)}
            style={{
              width: "15%",
              height: 45,

              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              marginLeft: 2,
              borderRadius: 7,
              justifyContent: "center",
            }}
          >
            <Ionicons
              name={"call"}
              size={20}
              color={"red"}
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", left: 50 }}
          onPress={() => navigation.navigate("RideDetail")}
        >
          <Image source={menu} />
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible2}>
        <View style={{ flex: 1, backgroundColor: "rgba(52, 52, 52, 0.8)" }}>
          <View
            style={{
              backgroundColor: "#FBFBFB",
              borderRadius: 20,
              flex: 1,
              marginVertical: 80,
              paddingVertical: 10,
              marginHorizontal: 10,
            }}
          >
            <View style={{ alignItems: "flex-end", paddingRight: 10 }}>
              <AntDesign
                name="close"
                size={24}
                color={"black"}
                style={{}}
                onPress={() => setModalVisible2(false)}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                }}
              >
                Write your feedback
              </Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <TextInput style={styles.input} placeholder="Good and honest!" />
            </View>
            <View style={{ paddingTop: 25, paddingLeft: 75 }}>
              <Text style={{ color: "black", fontWeight: "bold" }}>
                Parcel Condition
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingHorizontal: 50,
                paddingTop: 5,
              }}
            >
              <Entypo name="star-outlined" color={"black"} size={30} />
              <Entypo name="star-outlined" color={"black"} size={30} />
              <Entypo name="star-outlined" color={"black"} size={30} />
              <Entypo name="star-outlined" color={"black"} size={30} />
              <Entypo name="star-outlined" color={"black"} size={30} />
            </View>
            <View style={{ paddingTop: 25, paddingLeft: 75 }}>
              <Text style={{ color: "black", fontWeight: "bold" }}>
                Driver Timelines
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingHorizontal: 50,
                paddingTop: 5,
              }}
            >
              <Entypo name="star-outlined" color={"black"} size={30} />
              <Entypo name="star-outlined" color={"black"} size={30} />
              <Entypo name="star-outlined" color={"black"} size={30} />
              <Entypo name="star-outlined" color={"black"} size={30} />
              <Entypo name="star-outlined" color={"black"} size={30} />
            </View>
            <View style={{ alignItems: "center", marginVertical: 30 }}>
              <Text style={{ color: "black" }}>Add a tip</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingHorizontal: 50,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "18%",
                  backgroundColor: "white",
                  height: 45,
                  borderRadius: 25,
                  borderColor: "black",
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black" }}>$ 5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  backgroundColor: "#EEEEEE",
                  height: 45,
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black" }}>$ 10</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  backgroundColor: "white",
                  height: 45,
                  borderRadius: 25,
                  borderColor: "black",
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black" }}>$ 20</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  borderColor: colors.secondary,
                  width: "45%",
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  padding: 8,
                  marginBottom: 50,
                  marginTop: 30,
                }}
              >
                <Text style={{ color: colors.secondary, fontWeight: "bold" }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      
      {/* /////2nd Modal///// */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        
      >
                <View style={{ flex: 1, backgroundColor: "rgba(52, 52, 52, 0.8)" }}>

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            marginVertical: 120,
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 6,
            paddingVertical: 20,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: colors.secondary,
              }}
            >
              Delivery Successful
            </Text>
            <TouchableOpacity
              onPress={() => setModalVisible1(false)}
              style={{ position: "absolute", right: 15, top: 7 }}
            >
              <Image source={cross1} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="checkbox-blank-circle"
                color={"#d9d9d9"}
                size={18}
              />
              <Text style={{ color: "black", paddingLeft: 20 }}>
                Naud Street 1, Sector 9A, La
              </Text>
            </View>
            <View
              style={{
                borderLeftWidth: 2,
                borderLeftColor: colors.primary,
                height: 30,
                marginLeft: 27,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="square"
                color={colors.secondary}
                size={18}
                style={{ paddingTop: 5 }}
              />
              <Text style={{ color: "black", paddingLeft: 20 }}>
                Bestia Resturant La, Street 121,
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#B5B5B5",
              borderBottomWidth: 2,
              marginHorizontal: 160,
              marginTop: 40,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 20,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "center",
                }}
              >
                12 km
              </Text>
              <Text>Delivery distance</Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "center",
                }}
              >
                10 mins
              </Text>
              <Text>Delivery time</Text>
            </View>
          </View>

          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Text
              style={{
                color: colors.secondary,
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              $ 250.00
            </Text>
            <Text style={{ color: "#B5B5B5" }}>Payment has been added </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondary,
                width: "40%",
                padding: 5,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ color: "white" }}>Rate your ride</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </Modal>
      <BottomTab />
    </View>
  );
};

export default Trackparcel;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "80%",
  },
  input: {
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    paddingLeft: 25,
  },
  container1: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  textReceived: {
    color: "#000000",
    paddingLeft: 10,
  },
  textSendView: {
    backgroundColor: "#C2D0E9",
    marginHorizontal: 10,
    marginLeft: 60,
    paddingHorizontal: 20,
    width: "80%",
    paddingVertical: 10,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginVertical: 20,
  },
  textSend: {},
});
