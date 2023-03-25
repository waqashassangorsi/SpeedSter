import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';

import PhoneInput from 'react-native-phone-number-input';
import {logo, logo1, logo2} from '../../../assets';
import CountryPicker from 'react-native-country-picker-modal';
import OTPTextInput from 'react-native-otp-textinput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../theme/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';

const Phoneverify = ({route}) => {
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setotp] = useState('');
  const [showview, setshowview] = useState(0);
  const navigation = useNavigation();
  const phoneInput = useRef(null);
  // const {confirmation} = route.params;
  // console.log(
  //   'checkphonenum',

  //   confirmation,
  // );
  const callapi = () => {
    navigation.navigate('Home');
  };
  const subbmitotp = async () => {
    let promise = new Promise((rsl, rej) => {
      confirmation
        .confirm(otp)
        .then(confirmResult => {
          callapi();
          rsl(confirmResult);
        })
        .catch(error => {
          rej(error.message);
        });
    });
    promise.catch(err => {
      alert(err);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 70,
        }}>
        <Image
          source={logo1}
          // resizeMode="contain"
          // styles={{width: 100, height: 100}}
        />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Phone Verification
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 20,
            overflow: 'hidden',
            paddingBottom: 5,
          }}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="PK"
            layout="first"
            // withShadow

            containerStyle={styles.phoneNumberView}
            textContainerStyle={{
              paddingVertical: 0,
              backgroundColor: '#fff',
              height: 50,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
              borderRadius: 3,
              borderBottomWidth: 1,
              borderBottomColor: 'black',
            }}
            countryPickerButtonStyle={{
              backgroundColor: '#fff',
              height: 50,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
              borderRadius: 3,
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              marginRight: 10,
            }}
            onChangeFormattedText={text => {
              setPhoneNumber(text);
            }}
          />
          <TouchableOpacity
            onPress={() => setshowview(1)}
            style={{
              backgroundColor: '#aa2222',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              width: '15%',
              height: 50,
              position: 'absolute',
              right: 0.5,
              borderRadius: 5,
              bottom: 4.5,
            }}>
            <FontAwesome5
              name="chevron-right"
              size={25}
              color="white"
              style={{alignSelf: 'center', paddingTop: 10}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'right',
            paddingHorizontal: 20,
            color: '#aa2222',
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 10,
          }}>
          Resend Code
        </Text>
        {showview == 1 && (
          <View>
            <Text
              style={{
                paddingHorizontal: 10,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
                paddingVertical: 15,
                paddingTop: 20,
              }}>
              Enter four digit verification code
            </Text>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <OTPTextInput
            textInputStyle={{backgroundColor: '#d9d9d9', borderRadius: 5}}
            tintColor={'#d9d9d9'}
          /> */}
              <OTPInputView
                pinCount={6}
                style={{width: '90%', height: 60}}
                codeInputFieldStyle={styles.underlineStyleBase}
                code={otp}
                placeholderTextColor={'black'}
                onCodeChanged={e => setotp(e)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                paddingBottom: 5,
              }}>
              <TouchableOpacity
                // onPress={() => subbmitotp()}
                onPress={() => navigation.navigate('Home')}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#df0300',
                  width: '50%',
                  height: 30,
                  borderRadius: 7,
                  marginTop: 20,
                  shadowColor: '#000',
                  shadowOffset: {width: 1, height: 1},
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 4,
                }}>
                <Text
                  style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 120,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={{color: 'black'}}>Already have an account?</Text>
          <Text
            style={{
              color: '#df0300',
              fontWeight: 'bold',
              fontSize: 16,
              paddingLeft: 5,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Phoneverify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  phoneNumberView: {
    width: '100%',
    height: 50,
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    color: 'black',
  },
});
