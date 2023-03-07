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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {blacklogo} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Persons} from '../../../assets';
const Data = [1, 2, 3];

const SearchDriver = () => {
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
        }}>
        <View style={{width: '20%'}}>
          <Image
            source={Persons}
            style={{width: 60, height: 60, borderRadius: 30 / 2}}
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
          height: 1,
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

      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Searching for drivers
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
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
            alignItems: 'center',
            paddingVertical: 15,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            Searching for the drivers nearby
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="checkbox-blank-circle"
              color={'#d9d9d9'}
              size={18}
            />
            <Text style={{color: 'black', paddingLeft: 10}}>Naud Street</Text>
          </View>
          <View
            style={{
              borderLeftWidth: 2,
              borderLeftColor: colors.primary,
              height: 50,
              marginLeft: 27,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="square"
              color={colors.secondary}
              size={18}
              style={{paddingTop: 5}}
            />
            <Text style={{color: 'black', paddingLeft: 10}}>
              Bestia Resturant
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#d9d9d9',
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 60,
            padding: 8,
            marginBottom: 350,
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>Cancel Request</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default SearchDriver;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '40%',
  },
});
