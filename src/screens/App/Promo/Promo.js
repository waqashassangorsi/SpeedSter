import {StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import {blacklogo, deliver, Person1} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';

const Promo = () => {
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
      {/* <Badge
        size={100}
        status="warning"
        value="1"
        containerStyle={{
          position: 'absolute',
          right: 27,
          top: 40,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      /> */}

      <View
        style={{
          alignItems: 'center',
          marginVertical:Platform.OS=="ios"?20: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Promos
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', marginTop: 40}}>
            <View
              style={{
               
              }}>
              <Image
                source={Person1}
                style={{width: 60, height: 60, borderRadius: 60 / 2}}
              />
            </View>
            <View
              style={{
                
              }}>
              <Image
                source={Person1}
                style={{width: 60, height: 60, borderRadius: 60 / 2,marginLeft:-15}}
              />
            </View>
            <View
              style={{
               
              }}>
              <Image
                source={Person1}
                style={{width: 60, height: 60, borderRadius: 60 / 2}}
              />
            </View>
            <View
              style={{
               
              }}>
              <Image
                source={Person1}
                style={{width: 60, height: 60, borderRadius: 60 / 2,marginLeft:-15}}
              />
            </View>
          </View>
          
          <View style={{marginVertical: 20}}>
            <Text>Share your promo code with your friends and</Text>
            <Text style={{textAlign: 'center'}}>
              get{' '}
              <Text style={{color: 'black', fontWeight: 'bold'}}>50% OFF</Text>{' '}
              on your next delivery.
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                color: 'black',
                marginVertical: 20,
                fontWeight: 'bold',
              }}>
              Promo Code
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: colors.secondary,
                textDecorationLine: 'underline',
                fontWeight: 'bold',
              }}>
              1003
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 20,
              }}>
              Tap to copy
            </Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.secondary,
                  width: '55%',
                  alignItems: 'center',
                  padding: 10,
                  justifyContent: 'space-around',
                  borderRadius: 20,
                }}>
                <Entypo name="share" color={'white'} size={20} />
                <Text style={{color: 'white', fontSize: 16}}>Share Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 100, marginTop: 20}}>
          <View
            style={{
              backgroundColor: '#ffe1e4',
              paddingVertical: 30,
              width: '60%',
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>
              100 % off on your
            </Text>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: colors.primary}}>
              FIRST DELIVERY
            </Text>
            <Text style={{color: 'black'}}>
              By using Promo <Text style={{fontWeight: 'bold'}}>1003</Text>
            </Text>
          </View>
          <View style={{width: '40%'}}>
            <Image source={deliver} style={{}} />
          </View>
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Promo;

const styles = StyleSheet.create({});
