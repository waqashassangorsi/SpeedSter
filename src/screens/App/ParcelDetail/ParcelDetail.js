import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {blacklogo, ice, right} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Persons} from '../../../assets';
import RBSheet from 'react-native-raw-bottom-sheet';

const Data = [1, 2, 3];

const ParcelDetail = () => {
  const refRBSheet = useRef();

  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 33.684422, ////42.7339
    longitude: 73.047882, ////25.4858
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const renderItem = ({title}) => (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          paddingTop: 8,
        }}>
        <View style={{width: '20%'}}>
          <Image
            source={Persons}
            style={{width: 50, height: 50, borderRadius: 30 / 2}}
            resizeMode="contain"
          />
        </View>
        <View style={{width: '40%', paddingLeft: 15}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Small
          </Text>
          <Text style={{paddingTop: 5}}>Less than 30 lbs</Text>
        </View>
        <View
          style={{
            width: '40%',
            alignItems: 'flex-end',
          }}>
          <Text style={{paddingTop: 5, fontWeight: 'bold', color: 'black'}}>
            $ 0-$270.00
          </Text>
        </View>
      </View>
    </View>
  );
  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: '100%',
          backgroundColor: 'grey',
          marginVertical: 20,
        }}
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        containerStyle={{}}
        backgroundColor={'transparent'}
        leftComponent={
          <Octicons
            name={'three-bars'}
            size={30}
            color={'black'}
            style={{}}
            onPress={() => navigation.openDrawer()}
          />
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
            top:Platform.OS=="ios"?20:5,
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
            paddingVertical: 20,
          }}>
          <Text style={{color: 'black', fontSize: 14}}>Promo code applied</Text>
        </View>
        <View
          style={{
            borderColor: 'gray',
            borderWidth: 0.3,
            paddingVertical: 10,
          }}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemDivider}
          />
        </View>
        <TouchableOpacity
          // onPress={() => refRBSheet.current.open()}
          onPress={() => navigation.navigate('AddParcel')}
          style={{
            borderWidth: 1,
            borderColor: colors.secondary,
            // marginTop: 90,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 50,
            padding:Platform.OS=="ios"?10: 8,
            borderRadius:Platform.OS=="ios"?25: 20,
            marginVertical: 90,
          }}>
          <Text
            style={{color: colors.secondary, fontSize: 18, fontWeight: 'bold'}}>
            Add Parcel Details
          </Text>
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={false}
          closeOnPressMask={true}
          height={300}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
            },

            container: {
              backgroundColor: 'transparent',
            },
          }}>
          <View
            style={
              {
                // flexDirection: 'row',
                // justifyContent: 'space-evenly',
                // paddingTop: 100,
              }
            }>
            <Image
              source={ice}
              style={{
                height: 450,
                marginTop: -50,
                resizeMode: 'contain',
                marginLeft: -10,
              }}
            />
          </View>
          <View style={{position: 'absolute', bottom: 140, left: 130}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Enjoy 50% OFF
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: 90, left: 50}}>
            <Text
              style={{
                color: 'black',
              }}>
              Share your promo code with your friend and get
            </Text>
            <Text
              style={{
                color: 'black',
                paddingLeft: 60,
              }}>
              50% OFF on your next delivery
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: '43%',
              backgroundColor: colors.secondary,

              borderRadius: 20,
              padding: 5,
              position: 'absolute',
              bottom: 20,
              left: 120,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                paddingLeft: 10,
              }}>
              Apply Now
            </Text>
          </TouchableOpacity>
          <Image
            source={right}
            style={{
              position: 'absolute',
              bottom: 27,
              left: 238,
              tintColor: 'white',
            }}
          />
        </RBSheet>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default ParcelDetail;

const styles = StyleSheet.create({
  map: {
    height: 300,
    marginTop:Platform.OS=="ios"?10:0
  },
});
