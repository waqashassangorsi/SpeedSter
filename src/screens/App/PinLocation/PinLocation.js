import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {blacklogo, cross, Persons} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
const PinLocation = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 33.684422, ////42.7339
    longitude: 73.047882, ////25.4858
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
      <ScrollView>
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
        <View
          style={{
            width: '12%',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 8,
            paddingLeft: 5,
            height: 45,
            borderRadius: 25,
            position: 'absolute',
            top: 5,
            left: 15,
          }}>
          <Feather
            name={'arrow-left'}
            size={24}
            color={'black'}
            style={{alignSelf: 'center', paddingTop: 10, paddingRight: 7}}
          />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#C70118',
            position: 'absolute',
            left: 120,
            top: 130,
            width: '30%',
            padding: 5,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white'}}>Exact-Pin</Text>
        </TouchableOpacity>
        {/* </View> */}
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 15,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
          <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
            Select your pin location
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingVertical: 30,
          }}>
          <View style={{width: '50%', paddingLeft: 10}}>
            <Text
              style={{
                color: colors.secondary,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Beverly Hills st 4
            </Text>
          </View>
          <View style={{width: '50%', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: colors.secondary,
                padding: 6,
                borderRadius: 25,
                width: '80%',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: colors.secondary,
                }}>
                Search Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.secondary,
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            padding: 10,
            marginBottom: 400,
            borderRadius: 25,
          }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Confirm pin location
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default PinLocation;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '50%',
  },
});
