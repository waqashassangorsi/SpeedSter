import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {
  applepay,
  blacklogo,
  googlepay,
  mastercard,
  paypal,
  whatsapp,
} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Persons} from '../../../assets';
const Data = [1, 2, 3];

const ParcelDetail = () => {
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

        <View
          style={{
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Text style={{color: 'black', fontSize: 18}}>
            Select payment method{' '}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
            }}>
            <View style={{width: '20%'}}>
              <Image
                source={mastercard}
                style={{width: 50, height: 50}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '40%', paddingLeft: 15}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                Master Card
              </Text>
              <Text style={{paddingTop: 5}}>5078**********</Text>
            </View>
            <View
              style={{
                width: '40%',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <FontAwesome name="angle-right" color={'black'} size={20} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
            }}>
            <View style={{width: '20%'}}>
              <Image
                source={googlepay}
                style={{width: 50, height: 50}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '40%', paddingLeft: 15}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                Google Pay
              </Text>
              <Text style={{paddingTop: 5}}>Add details</Text>
            </View>
            <View
              style={{
                width: '40%',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <FontAwesome name="angle-right" color={'black'} size={20} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
            }}>
            <View style={{width: '20%'}}>
              <Image
                source={applepay}
                style={{width: 50, height: 50}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '40%', paddingLeft: 15}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                Apple Pay
              </Text>
              <Text style={{paddingTop: 5}}>3434*********</Text>
            </View>
            <View
              style={{
                width: '40%',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <FontAwesome name="angle-right" color={'black'} size={20} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
            }}>
            <View style={{width: '20%'}}>
              <Image
                source={paypal}
                style={{width: 50, height: 50}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '40%', paddingLeft: 15}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                Pay Pal
              </Text>
              <Text style={{paddingTop: 5}}>3434*********</Text>
            </View>
            <View
              style={{
                width: '40%',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <FontAwesome name="angle-right" color={'black'} size={20} />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            paddingHorizontal: 5,
            justifyContent: 'flex-end',
            paddingBottom: 400,
          }}>
          <Image source={whatsapp} style={{width: 90, height: 90}} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default ParcelDetail;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '40%',
  },
});
