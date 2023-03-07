import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import colors from '../../../theme/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../../../components/BottomTab';
import {whatsapp} from '../../../assets';
const SaveLocation = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, marginVertical: 50}}>
        <TextInput
          style={styles.input}
          placeholder="Search for a location..."
          placeholderTextColor={'black'}
        />
        <Fontisto style={styles.lock1} name="search" size={20} color="#000" />
        <Fontisto style={styles.eye1} name="mic" size={20} color="#000" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderBottomColor: colors.primary,
            borderBottomWidth: 0.3,
          }}>
          <View
            style={{
              backgroundColor: '#eeeeee',
              width: '10%',
              borderRadius: 30,
              padding: 5,
            }}>
            <Foundation name="star" size={22} style={{alignSelf: 'center'}} />
          </View>
          <View>
            <Text style={{paddingLeft: 20, color: 'black', fontWeight: 'bold'}}>
              Saved Places
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            paddingHorizontal: 5,
            justifyContent: 'flex-end',
            paddingBottom: 80,
          }}>
          <Image source={whatsapp} style={{width: 90, height: 90}} />
        </View>
      </View>
      <BottomTab />
    </View>
  );
};

export default SaveLocation;

const styles = StyleSheet.create({
  input: {
    height: 50,

    borderWidth: 0.3,
    borderColor: colors.primary,
    paddingLeft: 70,
  },
  eye1: {position: 'absolute', right: 20, top: 15},
  lock1: {position: 'absolute', top: 15, left: 20},
});
