import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../theme/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const SaveLocation = () => {
  const [region, setRegion] = useState({
    latitude: 33.684422, ////42.7339
    longitude: 73.047882, ////25.4858
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    // <View style={{flex: 1, backgroundColor: 'white'}}>
    //   <View style={{flex: 1, marginVertical: 50}}>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Search for a location..."
    //       placeholderTextColor={'black'}
    //     />
    //     <Fontisto style={styles.lock1} name="search" size={20} color="#000" />
    //     <Fontisto style={styles.eye1} name="mic" size={20} color="#000" />
    //     {/* <View
    //       style={{
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         paddingHorizontal: 15,
    //         paddingVertical: 15,
    //         borderBottomColor: colors.primary,
    //         borderBottomWidth: 0.3,
    //       }}>
    //       <View
    //         style={{
    //           backgroundColor: '#eeeeee',
    //           width: '10%',
    //           borderRadius: 30,
    //           padding: 5,
    //         }}>
    //         <Foundation name="star" size={22} style={{alignSelf: 'center'}} />
    //       </View>
    //       <View>
    //         <Text style={{paddingLeft: 20, color: 'black', fontWeight: 'bold'}}>
    //           Saved Places
    //         </Text>
    //       </View>
    //     </View> */}
    //   </View>
    //   <View style={{flex: 1}}>
    //     <View
    //       style={{
    //         alignItems: 'flex-end',
    //         flex: 1,
    //         paddingHorizontal: 5,
    //         justifyContent: 'flex-end',
    //         paddingBottom: 80,
    //       }}>
    //       <Image source={whatsapp} style={{width: 90, height: 90}} />
    //     </View>
    //   </View>
    //   <BottomTab />
    // </View>
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        minZoomLevel={18}
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

      <View
        style={{
          position: 'absolute',
          width: '100%',
          paddingTop: 10,
          flex: 1,
        }}>
        <GooglePlacesAutocomplete
          placeholder="Search for a location"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBZmuNL-9NHHZSvuQPb4hsBqP5pJBm8-QM',
            language: 'en',
          }}
          renderLeftButton={() => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                color: 'black',
              }}>
              <AntDesign
                // style={styles.lock1}
                name="search1"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          )}
          renderRightButton={() => (
            <TouchableOpacity>
              <Fontisto style={styles.eye1} name="mic" size={20} color="#000" />
            </TouchableOpacity>
          )}
          styles={{
            textInputContainer: {
              marginVertical: '10%',
              borderTopWidth: 0,
              marginHorizontal: 10,
              color: 'black',
            },
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.secondary,
          padding: 10,
          borderRadius: 25,
          position: 'absolute',
          bottom: 50,
          width: '80%',
          alignItems: 'center',
          left: 30,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Confirm pin location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveLocation;

const styles = StyleSheet.create({
  input: {
    height: 50,

    borderWidth: 0.3,
    borderColor: colors.primary,
    paddingLeft: 70,
  },
  eye1: {position: 'absolute', right: 20, top: 15},
  lock1: {position: 'absolute', top: 15, left: 50},
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
});
