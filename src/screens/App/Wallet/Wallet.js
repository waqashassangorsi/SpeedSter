import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import {blacklogo, mastercard1, walletcard, whatsapp} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Wallet = () => {
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
      <Badge
        size={100}
        status="warning"
        value=" "
        containerStyle={{
          position: 'absolute',
          right: 27,
          top: 40,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      />

      <View
        style={{
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Wallet
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <ScrollView>
        <View style={{marginTop: 10}}>
          <View style={{flex: 1}}>
            <Image
              source={walletcard}
              style={{width: '100%'}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              position: 'absolute',
              top: 60,
              left: 20,
            }}>
            <Text style={{color: 'black'}}>Speedster Cash</Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: colors.secondary,
                fontSize: 30,
              }}>
              $ 0.00
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                width: '130%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                borderRadius: 20,
                marginTop: 20,
              }}>
              <Text style={{color: 'white'}}>Add</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 20,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
                paddingHorizontal: 15,
              }}>
              Payment methods
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                alignItems: 'center',
              }}>
              <Image source={mastercard1} />
              <Text
                style={{
                  color: colors.primary,
                  paddingLeft: 15,
                  paddingVertical: 15,
                }}>
                Master Card
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#d9d9d9',
                width: '45%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 6,
                marginHorizontal: 15,
                borderRadius: 20,
                marginVertical: 5,
              }}>
              <Text style={{color: 'black'}}>Add Payment method</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              paddingVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 18,
                }}>
                Promotions
              </Text>
              <FontAwesome name="angle-right" color={'black'} size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                paddingVertical: 10,
              }}>
              <AntDesign name="plus" color={'black'} size={20} />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                Add PromoCode
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              paddingVertical: 20,
              marginBottom: 120,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 18,
                }}>
                Vouchers
              </Text>
              <FontAwesome name="angle-right" color={'black'} size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                paddingVertical: 10,
              }}>
              <AntDesign name="plus" color={'black'} size={20} />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                Add Voucher
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 75,
              right: 0,
            }}>
            <Image source={whatsapp} style={{width: 90, height: 90}} />
          </View>
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
