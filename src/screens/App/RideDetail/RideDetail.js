import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {john, menu} from '../../../assets';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';

const RideDetail = () => {
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
        value="1"
        containerStyle={{
          position: 'absolute',
          right: 27,
          top: 42,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{width: '25%', paddingLeft: 10}}>
          <Image source={john} />
        </View>
        <View style={{width: '60%', paddingTop: 5}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            John Adams
            <Text style={{fontSize: 12, color: 'gray'}}>(Laptops)</Text>
          </Text>
          <Text style={{fontSize: 12, paddingTop: 5}}>3Km Away-12 mins</Text>
        </View>
        <View style={{width: '15%', marginTop: -10}}>
          <Image source={menu} />
        </View>
      </View>
    </View>
  );
};

export default RideDetail;

const styles = StyleSheet.create({});
