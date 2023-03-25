import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import AlertModal from '../../../components/AlertModal';
import {
  blacklogo,
  cross,
  menu,
  Person1,
  Persons,
  whatsapp,
} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';

const Trackparcel = () => {
  const refRBSheet = useRef();
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 33.684422, ////42.7339
    longitude: 73.047882, ////25.4858
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [showAlert, setShowAlert] = useState(false);
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{}}
        backgroundColor={'transparent'}
        leftComponent={
          <Octicons name={'three-bars'} size={30} color={'black'} style={{}} />
        }
        centerComponent={
          <Image
            source={blacklogo}
            resizeMode="contain"
            styles={{width: 50, height: 50}}
          />
        }
        rightComponent={
          <MaterialCommunityIcons
            name={'gift'}
            size={30}
            color={'black'}
            style={{}}
          />
        }
      />
      <Badge
        size={100}
        status="warning"
        value="1"
        containerStyle={{
          position: 'absolute',
          right: 27,
          top: 42,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      />
      <View
        style={{
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Track Parcel
        </Text>
      </View>
      <Entypo
        name={'cross'}
        size={30}
        color={'black'}
        style={{position: 'absolute', right: 6, top: 106}}
      />
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={region}
          pinColor={'red'} // any color
          title={'title'}
          description={'description'}
        />
      </MapView>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          position: 'absolute',
          right: 8,
          bottom: 340,
        }}>
        <Image source={whatsapp} />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#c70118',
          right: 17,
          bottom: 310,
          width: '45%',
          padding: 8,
          borderRadius: 18,
        }}>
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
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
            backgroundColor: 'transparent',
          },
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginTop: 20,
          }}>
          <AntDesign name="arrowleft" color={'black'} size={20} />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Cancel Delivery
          </Text>
          <Entypo name={'cross'} size={20} color={'black'} />
        </View>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            paddingVertical: 10,
            fontWeight: 'bold',
          }}>
          Why do you want to cancel?
        </Text>
        <ScrollView style={{paddingHorizontal: 10}}>
          <Text
            style={{
              color: 'black',
              paddingVertical: 9,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            Requested by an accident?
          </Text>
          <Text
            style={{
              color: 'black',
              paddingVertical: 9,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            Selected wrong location?
          </Text>
          <Text
            style={{
              color: 'black',
              paddingVertical: 9,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              fontWeight: 'bold',
            }}>
            Driver is to far away?
          </Text>
          <Text
            style={{
              color: 'black',
              paddingVertical: 9,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            Driver isn't available?
          </Text>
          <Text
            style={{
              color: 'black',
              paddingVertical: 9,
            }}>
            May be next time?
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 9,
              marginVertical: 20,
              marginHorizontal: 80,
              borderRadius: 20,
            }}>
            <Text style={{color: 'white'}}>Confirm Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </RBSheet>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#C70118',
          marginHorizontal: 15,
          paddingVertical: 20,
          bottom: 180,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%', paddingLeft: 15}}>
            <Fontisto name={'stopwatch'} size={22} color={'white'} style={{}} />
          </View>
          <View style={{width: '50%', paddingLeft: 25}}>
            <Foundation name={'marker'} size={22} color={'white'} style={{}} />
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 10}}>
          <View style={{width: '50%', paddingLeft: 35}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              12:40 PM
            </Text>
            <Text style={{color: 'white'}}>Delivery Time</Text>
          </View>
          <View style={{width: '50%', paddingLeft: 45}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Naud St
            </Text>
            <Text style={{color: 'white'}}>Delivery Place</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#c70118',
          bottom: 79,
          paddingVertical: 20,
          marginHorizontal: 7,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              width: '25%',
              // backgroundColor: 'blue',
            }}>
            <Image
              source={Person1}
              style={{width: 60, height: 60, borderRadius: 30 / 2}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              width: '40%',
              // backgroundColor: 'pink',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                paddingTop: 6,
              }}>
              John Adams
            </Text>
            <Text style={{color: 'white'}}>Delivery boy</Text>
          </View>
          <View
            style={{
              width: '15%',
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              height: 45,
              borderRadius: 7,
              justifyContent: 'center',
            }}>
            <MaterialCommunityIcons
              name={'message-text-outline'}
              size={20}
              color={'red'}
              style={{alignSelf: 'center'}}
            />
          </View>
          <View
            style={{
              width: '15%',
              height: 45,

              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              marginLeft: 2,
              borderRadius: 7,
              justifyContent: 'center',
            }}>
            <Ionicons
              name={'call'}
              size={20}
              color={'red'}
              style={{alignSelf: 'center'}}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', left: 50}}
          // onPress={() => navigation.navigate('RideDetail')}
        >
          <Image source={menu} />
        </TouchableOpacity>
      </View>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: '#FBFBFB',
              borderRadius: 20,
              borderWidth: 1,
              paddingVertical: 10,
              // flex: Platform.OS == "android" ? 0.5 : 0.5,
            }}>
            <View style={{alignItems: 'flex-end', paddingRight: 10}}>
              <AntDesign
                name="close"
                size={24}
                color={'black'}
                style={{}}
                onPress={() => setModalVisible(false)}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'black',
                }}>
                Write your feedback
              </Text>
            </View>
            <View style={{paddingVertical: 10}}>
              <TextInput
                style={styles.input}
                placeholder="your feedback is important to us"
              />
            </View>
            <View style={{alignItems: 'center', paddingVertical: 25}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Please rate our app
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingHorizontal: 50,
              }}>
              <Entypo name="star-outlined" color={'black'} size={30} />
              <Entypo name="star-outlined" color={'black'} size={30} />
              <Entypo name="star-outlined" color={'black'} size={30} />
              <Entypo name="star-outlined" color={'black'} size={30} />
              <Entypo name="star-outlined" color={'black'} size={30} />
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  borderColor: colors.secondary,
                  width: '50%',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  padding: 10,
                  marginBottom: 50,
                  marginTop: 30,
                }}>
                <Text style={{color: colors.secondary, fontWeight: 'bold'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <BottomTab />
    </View>
  );
};

export default Trackparcel;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
  input: {
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingLeft: 25,
  },
});
