import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  FlatList,
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import React, { useState, useRef, useEffect } from "react";
import { Header } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Contacts from "react-native-contacts";
import ListItem from "../../../components/ListItem";
import {
  blacklogo,
  solid,
  Person1,
  whatsapp,
  promo,
  car,
  bus,
  truck,
  checkmark,
  cross,
  cross1,
} from "../../../assets";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTab from "../../../components/BottomTab";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import colors from "../../../theme/colors";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Calendar } from "react-native-calendars";
import { CalendarList } from "react-native-calendars";
import Modal from "react-native-modal";
// import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";

const Data = [1, 2, 3];
const SLIDER_WIDTH = 400;
const ITEM_WIDTH = 400;
// const requestLocationPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: "Geolocation Permission",
//         message: "Can we access your location?",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK",
//       }
//     );
//     console.log("granted", granted);
//     if (granted === "granted") {
//       console.log("You can use Geolocation");
//       return true;
//     } else {
//       console.log("You cannot use Geolocation");
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };
const Home = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [modal, setmodal] = useState(false);
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState("time");
  const [isDisplayDate, setShow] = useState(false);
  const [location, setLocation] = useState(false);
  const refRBSheet = useRef();
  const [contacts, setContacts] = useState([]);

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const [region, setRegion] = useState({
    latitude: 33.684422, ////42.7339
    longitude: 73.047882, ////25.4858
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const marked = {
    "2023-03-07": { marked: true },
    "2023-03-07": {
      selected: true,
      selectedColor: "#aa2222",
      selectedTextColor: "white",
    },
  };
  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const displayDatepicker = () => {
    showMode("time");
  };
  const renderItem = ({ title }) => (
    <View style={{ flexDirection: "row", marginLeft: 10 }}>
      <View
        style={{
          backgroundColor: "#ffe1e4",
          paddingVertical: 10,
          paddingHorizontal: 45,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          width:'67%'
        }}
      >
        <Text style={{ color: "black", fontSize: 16, marginLeft: -20 }}>
          100 % of on your
        </Text>
        <Text
          style={{
            color: colors.primary,
            fontSize: 22,
            fontWeight: "bold",
            paddingVertical: 5,
            marginLeft: -20,
          }}
        >
          First Delivery
        </Text>
        <Text style={{ color: "black", marginLeft: -20 }}>
          by using promo 1003
        </Text>
      </View>
      <View style={{}}>
        <Image
          source={Person1}
          style={{ borderRadius: 10, width: 133, height: 140 }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
  // const getLocation = () => {
  //   const result = requestLocationPermission();
  //   result.then((res) => {
  //     console.log("res is:", res);
  //     if (res) {
  //       Geolocation.getCurrentPosition(
  //         (position) => {
  //           console.log(position);
  //           setLocation(position);
  //         },
  //         (error) => {
  //           // See error code charts below.
  //           console.log(error.code, error.message);
  //           setLocation(false);
  //         },
  //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //       );
  //     }
  //   });
  //   console.log(location);
  // };
  // useEffect(() => {
  //   if (Platform.OS === "android") {
  //     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  //       title: "Contacts",
  //       message: "This app would like to view your contacts.",
  //     }).then(() => {
  //       loadContacts();
  //     });
  //   } else {
  //     loadContacts();
  //   }
  // }, []);

  // const loadContacts = () => {
  //   Contacts.getAll()
  //     .then((contacts) => {
  //       contacts.sort(
  //         (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase()
  //       );
  //       setContacts(contacts);
  //     })
  //     .catch((e) => {
  //       alert("Permission to access contacts was denied");
  //       console.warn("Permission to access contacts was denied");
  //     });
  // };

  // const openContact = (contact) => {
  //   console.log(JSON.stringify(contact));
  //   Contacts.openExistingContact(contact);
  // };
  // const toggleModal = () => {
  //   setModalVisible1(!isModalVisible1);
  // };
  // const closemodal = () => {
  //   setModalVisible1(false);
  // };
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
        centerComponent={<Image source={blacklogo} resizeMode="contain" />}
        rightComponent={
          <MaterialCommunityIcons
            name={"gift"}
            size={30}
            color={"black"}
            style={{}}
          />
        }
      />
      <ScrollView style={{}}>
        <View style={{ marginVertical: 10 }}>
          <Carousel
            ref={isCarousel}
            data={Data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index) => setIndex(index)}
          />
          <View style={{ position: "absolute", bottom: 0, left: 5 }}>
            <Pagination
              dotsLength={Data.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                // marginHorizontal: 8,
                // backgroundColor: '#F4BB41',
                // marginTop: -10,
                // marginLeft: -50,
              }}
              tappableDots={true}
              inactiveDotStyle={{
                backgroundColor: "black",
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F4F4F4",
            marginHorizontal: 10,
            borderRadius: 10,
            paddingVertical: 10,
          }}
        >
          <View style={{ paddingLeft: 15 }}>
            <Image source={solid} />
          </View>
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ color: "#444444" }}>Turn on your location</Text>
            <Text style={{ color: "#444444" }}>
              Let speedster app access to your locatin
            </Text>
            <TouchableOpacity
              // onPress={getLocation}
              style={{
                backgroundColor: "#D9D9D9",
                width: "60%",
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginVertical: 10,
              }}
            >
              <Text style={{ color: "black" }}>Turn on location</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              color: "black",
              paddingTop: 15,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Select Package
          </Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "31%",
                backgroundColor: "#ffefe5",
                borderRadius: 15,
                paddingHorizontal: 8,
                paddingVertical: 12,
              }}
            >
              <Image source={promo} style={{}} />
              <Image source={car} style={{ alignSelf: "flex-end" }} />
              <Text style={{ color: "black" }}>Small</Text>
            </View>
            <View
              style={{
                width: "31%",
                backgroundColor: "#f0f6ff",
                borderRadius: 15,
                paddingHorizontal: 8,
                paddingVertical: 12,
              }}
            >
              <Image
                source={bus}
                style={{ alignSelf: "flex-end", marginTop: 17 }}
              />
              <Text style={{ color: "black", paddingTop: 2 }}>Medium</Text>
            </View>
            <View
              style={{
                width: "31%",
                backgroundColor: "#fffee7",
                borderRadius: 15,
                paddingHorizontal: 8,
                paddingVertical: 12,
              }}
            >
              <Image
                source={truck}
                style={{ alignSelf: "flex-end", marginTop: 17 }}
              />
              <Text style={{ color: "black", paddingTop: 2 }}>Large</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 15,
              marginVertical: 20,
            }}
          >
            <View style={{ width: "10%", paddingTop: 20 }}>
              <View>
                <FontAwesome
                  name="circle"
                  color={"#d9d9d9"}
                  style={{ paddingLeft: 5 }}
                />
              </View>
              <View
                style={{
                  borderLeftWidth: 2,
                  borderLeftColor: colors.primary,
                  height: 50,
                  marginLeft: 9,
                }}
              ></View>

              <View>
                <MaterialCommunityIcons
                  name="square"
                  color={colors.primary}
                  style={{ paddingLeft: 5 }}
                />
              </View>
              <View style={{ paddingTop: 35 }}>
                <AntDesign
                  name="calendar"
                  color={colors.primary}
                  size={20}
                  onPress={() =>
                    //displayDatepicker()
                    setModalVisible(true)
                  }
                />
              </View>
            </View>
            <View style={{ width: "80%" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SaveLocation")}
                style={styles.input}
              >
                <Text style={{ paddingTop: 10 }}>Select Pick up</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SaveLocation")}
                  style={styles.input}
                >
                  <Text style={{ paddingTop: 10 }}>Select drop off</Text>
                </TouchableOpacity>
                <AntDesign
                  style={styles.plus}
                  name="pluscircle"
                  size={24}
                  color={colors.primary}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="When"
                placeholderTextColor={"black"}
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Add multiple delivery"
                  placeholderTextColor={"black"}
                />

                <EvilIcons
                  style={styles.eye1}
                  name="close-o"
                  size={24}
                  color="#000"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Add multiple delivery"
                  placeholderTextColor={"black"}
                />

                <EvilIcons
                  style={styles.eye1}
                  name="close-o"
                  size={24}
                  color="#000"
                />
              </View>
            </View>
            <View style={{ width: "10%", paddingTop: 40 }}>
              <View>
                <Fontisto name="arrow-v" color={"black"} size={20} />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ParcelDetail")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.secondary,
              width: "50%",
              height: 30,
              borderRadius: 7,
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
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#eeeeee",
                width: "10%",
                borderRadius: 30,
                padding: 5,
              }}
            >
              <Fontisto name="home" size={22} style={{ alignSelf: "center" }} />
            </View>
            <View>
              <Text
                style={{ paddingLeft: 20, color: "black", fontWeight: "bold" }}
              >
                Home
              </Text>
              <Text style={{ paddingLeft: 20 }}>1725 Naud Street</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,

              marginVertical: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#eeeeee",
                width: "10%",
                borderRadius: 30,
                padding: 5,
              }}
            >
              <Foundation
                name="star"
                size={22}
                style={{ alignSelf: "center" }}
              />
            </View>
            <View>
              <Text
                style={{ paddingLeft: 20, color: "black", fontWeight: "bold" }}
              >
                Bestia
              </Text>
              <Text style={{ paddingLeft: 20 }}>
                Italian Resturant 2121 E 7th PI
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            paddingHorizontal: 15,
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
            paddingTop: 20,
          }}
        >
          Nearby
        </Text>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            //  marginBottom: 300,
            marginVertical: 30,
          }}
        >
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker
              coordinate={region}
              pinColor={"red"} // any color
              title={"title"}
              description={"description"}
            />
          </MapView>
        </View>

        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={{
            position: "absolute",
            bottom: 60,
            right: 0,
          }}
        >
          <Image source={whatsapp} style={{ width: 90, height: 90 }} />
        </TouchableOpacity>
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
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
              Receiver Details
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ paddingLeft: 10 }}>Receiver's Name</Text>
            <TextInput
              style={styles.input1}
              placeholder="Name"
              placeholderTextColor={"#A4A4A4"}
            />
            <Octicons
              style={styles.person}
              name="person"
              size={20}
              color="#A4A4A4"
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ paddingLeft: 10 }}>Receiver's Name</Text>
            <TextInput
              style={styles.input1}
              placeholder="Number"
              placeholderTextColor={"#A4A4A4"}
            />

            <MaterialIcons
              style={styles.person}
              name="call"
              size={20}
              color="#A4A4A4"
            />
            <MaterialIcons
              style={styles.eye}
              name="mode-edit"
              size={20}
              color={colors.secondary}
              // onPress={toggleModal}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              justifyContent: "center",
              alignItems: "center",
              padding: 7,
              marginVertical: 20,
              marginHorizontal: 30,
              borderRadius: 20,
            }}
          >
            <Image source={checkmark} />
          </TouchableOpacity>
        </RBSheet>
        <Modal
          animationType="slide"
          transparent={true}
          isVisible={isModalVisible}
        >
          <View
            style={{
              backgroundColor: "#FBFBFB",
              borderRadius: 20,
              borderWidth: 1,
              paddingVertical: 10,
              // flex: Platform.OS == "android" ? 0.5 : 0.5,
            }}
          >
            <Entypo
              name={"cross"}
              size={30}
              color={"black"}
              onPress={() => setModalVisible(false)}
            />
            <Calendar
              disableArrowLeft={true}
              hideArrows={true}
              markedDates={marked}
            />
          </View>
        </Modal>
        {/* {isDisplayDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={mydate}
            mode={displaymode}
            is24Hour={true}
            display="default"
            onChange={changeSelectedDate}
          />
        )} */}
      </ScrollView>
      <View style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          isVisible={isModalVisible1}
        >
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: 10,

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              paddingBottom: 60,
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
                paddingRight: 10,
                paddingTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  closemodal();
                }}
              >
                <Image
                  source={cross1}
                  resizemode="contain"
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={contacts}
              renderItem={(contact) => {
                {
                  console.log("contact -> " + JSON.stringify(contact));
                }
                return (
                  <ListItem
                    key={contact.item.recordID}
                    item={contact.item}
                    onPress={openContact}
                  />
                );
              }}
              keyExtractor={(item) => item.recordID}
            />
          </View>
        </Modal>
      </View>
      <BottomTab />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 10,
    marginVertical: 5,
  },
  plus: { position: "absolute", right: 0, top: 30 },
  map: {
    width: "100%",
    height: "100%",
    marginBottom: 300,
  },
  // map: {
  //   ...StyleSheet.absoluteFillObject,
  // },
  input1: {
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
    paddingLeft: 50,
    marginTop: 10,
  },
   person: { position: "absolute", left: 20, top: 43 },
   eye1: { position: "absolute", right: 13, top: 17 },
   lock: { position: "absolute", top: 43, left: 30 },
   eye: { position: "absolute", right: 13, top: 40},

});
