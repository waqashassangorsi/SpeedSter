import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {blacklogo, box} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Persons} from '../../../assets';
import RBSheet from 'react-native-raw-bottom-sheet';

const Data = [1, 2, 3];

const AddParcel = () => {
  const refRBSheet = useRef();

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
          Add Parcel Details
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{fontSize: 18, color: 'black', paddingTop: 10}}>
            Parcel Image<Text style={{color: colors.primary}}>*</Text>
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Image
              source={Persons}
              style={{height: 140, width: 140}}
              resizeMode="cover"
            />
            <View
              style={{
                width: '40%',
                borderColor: 'gray',
                borderWidth: 1,
                borderStyle: 'dotted',
                marginLeft: 20,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="plus" color={'gray'} size={20} />
            </View>
          </View>
          <Text style={{fontSize: 18, color: 'black', paddingTop: 12}}>
            Parcel Description<Text style={{color: colors.primary}}>*</Text>
          </Text>
          <TextInput
            placeholder="Parcel name and detail"
            style={styles.input}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{}}>
              <AntDesign
                name={'checksquareo'}
                color={colors.primary}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 3,
                  color: colors.primary,
                  fontWeight: 'bold',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={{
              borderWidth: 1,
              borderColor: '#C70118',
              marginTop: 70,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 50,
              padding: 8,
              marginBottom: 100,
              borderRadius: 20,
            }}>
            <Text style={{color: '#C70118', fontSize: 18, fontWeight: 'bold'}}>
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>
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
              source={box}
              style={{height: 450, marginTop: -50, resizeMode: 'contain'}}
            />
            {/* <TouchableOpacity
              style={{
                width: '40%',
                borderColor: colors.primary,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Deliver Later
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '40%',
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Deliver Now
              </Text>
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              position: 'absolute',
              bottom: 70,
              left: 20,
            }}>
            <TouchableOpacity
              style={{
                width: '45%',
                borderColor: colors.primary,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Deliver Later
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '45%',
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Deliver Now
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default AddParcel;

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 20,
    paddingLeft: 10,
  },
});
