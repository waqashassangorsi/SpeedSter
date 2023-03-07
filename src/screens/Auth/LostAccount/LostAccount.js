import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {logo1} from '../../../assets';
import colors from '../../../theme/colors';
const LostAccount = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Image
          source={logo1}
          resizeMode="contain"
          styles={{width: 100, height: 100}}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white', marginTop: 90}}>
        {/* <View style={{flex: 1, backgroundColor: 'white'}}> */}
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: 'black'}}>
            Lost your acount?
          </Text>
          <Text style={{color: 'black', paddingTop: 8}}>
            Don't Worry we are here for you.Enter your email{' '}
          </Text>
          <Text style={{color: 'black'}}>
            and we will send a password reset link.{' '}
          </Text>
        </View>
        <View style={{marginTop: 15, overflow: 'hidden', paddingBottom: 5}}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={'black'}
          />
          <MaterialCommunityIcons
            style={styles.lock1}
            name="email-outline"
            size={20}
            color="#000"
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            paddingBottom: 5,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.secondary,
              width: '50%',
              height: 30,
              borderRadius: 20,
              marginTop: 10,
              elevation: 8,
              borderRadius: 3,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 150,
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{color: 'black'}}>Already have an account?</Text>
          <Text style={{color: '#df0300', fontWeight: 'bold', fontSize: 16}}>
            Sign In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LostAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 10,

    borderRadius: 3,

    backgroundColor: '#fff',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },

  lock1: {position: 'absolute', top: 15, left: 20},
});
