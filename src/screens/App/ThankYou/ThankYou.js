import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {gift, logo2} from '../../../assets';
import Entypo from 'react-native-vector-icons/Entypo';

const ThankYou = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={logo2}
          resizeMode="cover"
          style={{width: 250, height: 150, marginTop: 60}}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fcf3f4',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          elevation: 28,
        }}>
        <View
          style={{
            alignItems: 'flex-end',
            paddingRight: 20,
            marginTop: 20,
          }}>
          <Entypo name={'cross'} size={36} color={'black'} style={{}} />
        </View>
        <View style={{alignItems: 'center', paddingTop: 30}}>
          <Image source={gift} resizeMode="contain" />
          <Text
            style={{
              color: '#210000',
              fontSize: 30,
              fontWeight: 'bold',
              paddingTop: 15,
            }}>
            Thankyou !
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingTop: 5,
            }}>
            your Parcel Delivered Successfully
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ThankYou;

const styles = StyleSheet.create({});
