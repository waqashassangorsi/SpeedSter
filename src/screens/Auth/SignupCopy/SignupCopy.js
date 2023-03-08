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
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {logo1} from '../../../assets';
const SignupCopy = () => {
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
        <View style={{overflow: 'hidden', paddingBottom: 5}}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={'black'}
          />
          <Octicons
            style={styles.person}
            name="person"
            size={20}
            color="#000"
          />
        </View>
        <View style={{overflow: 'hidden', paddingVertical: 5}}>
          <TextInput
            style={styles.input}
            placeholder="Number"
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={'black'}
          />
          <Feather
            style={styles.call}
            name="phone-call"
            size={20}
            color="#000"
          />
        </View>
        <View style={{overflow: 'hidden', paddingBottom: 8}}>
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
        <View style={{marginLeft: 15}}>
          <Text style={{color: '#4dcc57', fontWeight: 'bold'}}>
            Password matched
          </Text>
        </View>
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
              backgroundColor: '#df0300',
              width: '50%',
              height: 30,
              borderRadius: 7,
              marginTop: 30,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 70,
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

export default SignupCopy;

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
  person: {position: 'absolute', left: 20, top: 15},
  call: {position: 'absolute', top: 20, left: 20},
  lock: {position: 'absolute', top: 15, left: 20},
  lock1: {position: 'absolute', top: 15, left: 20},
  eye: {position: 'absolute', right: 20, top: 15},
  eye1: {position: 'absolute', right: 20, top: 15},
});
