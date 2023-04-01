import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import colors from '../theme/colors';
import fonts from '../theme/fonts';
import {
  Person1,
  blacklogo,
  rates,
  rating,
  breif,
  arrow,
  wallet,
} from '../assets';
import {connect} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
const DrawerContent = ({props, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Header
            containerStyle={{}}
            backgroundColor={'transparent'}
            leftComponent={
              <Image
                source={blacklogo}
                resizeMode="contain"
                styles={{width: 80, height: 80}}
              />
            }
            rightComponent={
              <Entypo name={'cross'} size={30} color={'black'} style={{marginTop:-15}} />
            }
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 4,
              shadowOpacity: 0.25,
              shadowRadius: 4,
              paddingHorizontal: 10,
              paddingVertical: 18,
            }}>
            <View>
              <Image
                source={Person1}
                resizeMode="cover"
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 60 / 2,
                }}
              />
            </View>
            <View style={{paddingLeft: 15}}>
              <Text style={{fontSize: 17, color: 'black'}}>Nora Powell</Text>
              <Text style={{color: 'black'}}>johnyybravo@gmail.com</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              elevation: 4,
              backgroundColor: 'white',
              paddingVertical: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 4,
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}>
            <Octicons name="person" color={'black'} size={20} />
            <Text style={{color: 'black', fontSize: 16, paddingRight: 20}}>
              AccountDetails
            </Text>
            <Feather name="chevron-right" color={'black'} size={20} />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              elevation: 4,
              backgroundColor: 'white',
              paddingVertical: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 4,
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 10,
              }}>
              <Feather name="truck" color={'black'} size={20} />
              <Text style={{color: 'black', fontSize: 16}}>
                Previous Deliveries
              </Text>
              <Feather name="chevron-right" color={'black'} size={20} />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vouchers')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 20,
              }}>
              <MaterialCommunityIcons
                name="gift-open"
                color={'black'}
                size={20}
              />
              <Text style={{color: 'black', fontSize: 16, paddingRight: 90}}>
                Offers
              </Text>
              <Feather name="chevron-right" color={'black'} size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Wallet')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: 20,
            }}>
            <View style={{width: '25%'}}>
              <Image source={wallet} />
            </View>
            <View style={{width: '67%'}}>
              <Text style={{color: 'black', fontSize: 15}}>Wallet</Text>
            </View>
            <View style={{width: '20%'}}>
              <Entypo name="chevron-small-right" color={'black'} size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Rates')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View style={{width: '25%'}}>
              <Image source={rates} />
            </View>
            <View style={{width: '67%'}}>
              <Text style={{color: 'black', fontSize: 15}}>Rates</Text>
            </View>
            <View style={{width: '20%'}}>
              <Entypo name="chevron-small-right" color={'black'} size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Refferals')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View style={{width: '25%'}}>
              <Image source={rating} />
            </View>
            <View style={{width: '67%'}}>
              <Text style={{color: 'black', fontSize: 15}}>Referals</Text>
            </View>
            <View style={{width: '20%'}}>
              <Entypo name="chevron-small-right" color={'black'} size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contact')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View style={{width: '25%'}}>
              <Image source={breif} />
            </View>
            <View style={{width: '67%'}}>
              <Text style={{color: 'black', fontSize: 15}}>Contact us</Text>
            </View>
            <View style={{width: '20%'}}>
              <Entypo name="chevron-small-right" color={'black'} size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Insuarance')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View style={{width: '25%'}}>
              <Image source={breif} />
            </View>
            <View style={{width: '67%'}}>
              <Text style={{color: 'black', fontSize: 15}}>Insuarance</Text>
            </View>
            <View style={{width: '20%'}}>
              <Entypo name="chevron-small-right" color={'black'} size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Works')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View style={{width: '25%'}}>
              <Image source={arrow} />
            </View>
            <View style={{width: '67%'}}>
              <Text style={{color: 'black', fontSize: 15}}>How it works</Text>
            </View>
            <View style={{width: '20%'}}>
              <Entypo name="chevron-small-right" color={'black'} size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.secondary,
              marginVertical: 15,
              marginHorizontal: 20,
              padding: 9,
              borderRadius: 20,
              marginTop: 50,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  const {user} = state.auth;
  return {user};
};
export default connect(mapStateToProps, {})(DrawerContent);
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    color: 'black',
    fontFamily: fonts.PoppinsMedium,
    right: 10,
  },
});
