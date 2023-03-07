import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import {Divider, RadioButton} from 'react-native-paper';
import colors from '../theme/colors';

const BottomTab = ({}) => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: colors.primary,
        bottom: 0,
        width: '100%',
        paddingVertical: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 12,
        }}>
        <View style={{width: '23%'}}>
          <MaterialCommunityIcons
            name={'home-minus-outline'}
            size={30}
            color={'white'}
            style={{}}
          />
          <Text style={{color: 'white', fontSize: 10, paddingLeft: 3}}>
            Home
          </Text>
          <Divider
            style={{
              width: 25,
              borderWidth: 1,
              borderColor: 'white',
              marginLeft: 3,
            }}
          />
        </View>
        <View
          style={{
            width: '23%',
            paddingLeft: 10,
          }}>
          <MaterialCommunityIcons
            name={'headphones'}
            size={30}
            color={'white'}
            style={{}}
          />
          <Text style={{color: 'white', fontSize: 10, paddingLeft: 5}}>
            Help
          </Text>
        </View>
        <View
          style={{
            width: '23%',
            paddingLeft: 25,
          }}>
          <MaterialIcons
            name={'watch-later'}
            size={30}
            color={'white'}
            style={{paddingLeft: 5}}
          />
          <Text style={{color: 'white', fontSize: 10}}>Activities</Text>
        </View>
        <View
          style={{
            width: '23%',
            alignItems: 'flex-end',
          }}>
          <Octicons
            name={'person'}
            size={30}
            color={'white'}
            style={{paddingRight: 4}}
          />
          <Text style={{color: 'white', fontSize: 10, paddingLeft: 10}}>
            Profile
          </Text>
        </View>
      </View>
    </View>
  );
};
export default BottomTab;
