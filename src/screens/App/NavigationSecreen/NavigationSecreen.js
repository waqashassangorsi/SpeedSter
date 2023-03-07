import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';

const NavigationSecreen = ({navigation}) => {
  //   const navigation = useNavigation;
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignupCopy')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          1st secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Phoneverify')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          2nd secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ResetPassword')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          3rd secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Trackparcel')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          4th secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ReviewsRating')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          5th secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Help')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          6 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Works')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          7 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('GiftVoucher')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          8 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Insuarance')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          9 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Paypal')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          10 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Rates')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          11 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Contact')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          12 secreen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ParcelDetail')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          13 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddParcel')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          14 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PinLocation')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          15 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SelectPayment')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          16 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchDriver')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          17 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('CardDetail')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          18 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LostAccount')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          19 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          20 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Wallet')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          21 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddWallet')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          22 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Refferals')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          23 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DriverCompliments')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          24 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Promo')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          25 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyProfile')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          26 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Parcel')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          27 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Activities')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          28 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SaveLocation')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          29 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ShowActivities')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          30 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ThankYou')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          31 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Vouchers')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          32 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          33 secreen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DateTime')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df0300',
          width: '50%',
          height: 30,
          borderRadius: 7,
          marginTop: 20,
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          34 secreen
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NavigationSecreen;

const styles = StyleSheet.create({});
