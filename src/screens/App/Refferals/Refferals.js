import {StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import {blacklogo, Person1, Persons} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';

const Refferals = () => {
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
          Refferals
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
          <View style={{position: 'absolute', right: 130, top: 40}}>
            <Image
              source={Person1}
              style={{
                width: 60,
                height: 60,
                borderRadius: 60 / 2,
              }}
            />
          </View>
          <View style={{position: 'absolute', left: 120, top: 40}}>
            <Image
              source={Person1}
              style={{
                width: 60,
                height: 60,
                borderRadius: 60 / 2,
              }}
            />
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Share your referal link with your friends </Text>
            <Text style={{textAlign: 'center'}}>
              and get{' '}
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                2 Free Deliveries
              </Text>
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                color: 'black',
                marginVertical: 20,
                fontWeight: 'bold',
              }}>
              Refferal Link
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: '#5491f5',
                }}>
                referspeedsterapp.com
              </Text>
              <Entypo name="attachment" color={'#5491f5'} size={16} />
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 20,
              }}>
              Tap to copy
            </Text>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.secondary,
                  width: '60%',
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
            <Image source={Person1} style={{borderRadius: 10}} />
          </View>
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Refferals;

const styles = StyleSheet.create({});
