import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {logo, logo1} from '../../../assets';
const ResetPassword = () => {
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
          resizeMode="contain"
          styles={{width: 100, height: 100}}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <View style={{flex: 1, backgroundColor: 'white'}}> */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Reset your password?
          </Text>
        </View>
        <View style={{marginTop: 20, overflow: 'hidden', paddingBottom: 5}}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={'black'}
          />

          <MaterialIcons
            style={styles.lock}
            name="lock-open"
            size={20}
            color="#000"
          />
          <Feather style={styles.eye} name="eye-off" size={20} color="#000" />
        </View>
        <View style={{overflow: 'hidden', paddingBottom: 5}}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={'black'}
          />
          <MaterialIcons
            style={styles.lock1}
            name="lock-open"
            size={20}
            color="#000"
          />
          <Feather style={styles.eye1} name="eye-off" size={20} color="#000" />
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#4dcc57', fontWeight: 'bold'}}>
            Password matched
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5,
            overflow: 'hidden',
          }}>
          <TouchableOpacity
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
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 130,
            alignItems: 'center',
            marginBottom: 10,
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
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;

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
  person: {position: 'absolute', left: 20, top: 25},
  call: {position: 'absolute', top: 25, left: 20},
  lock: {position: 'absolute', top: 25, left: 20},
  lock1: {position: 'absolute', top: 25, left: 20},
  eye: {position: 'absolute', right: 20, top: 25},
  eye1: {position: 'absolute', right: 20, top: 25},
});
