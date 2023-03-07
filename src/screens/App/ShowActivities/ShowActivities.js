import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import BottomTab from '../../../components/BottomTab';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import {blacklogo, cross, logo2, Persons} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ShowActivities = () => {
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
          top: 36,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      />
      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Activities
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
        <View style={{}}>
          <Image
            source={logo2}
            resizeMode="cover"
            style={{width: 250, height: 150, marginTop: 60}}
          />
          <Text style={{textAlign: 'center', paddingTop: 20}}>
            There is nothing to show
          </Text>
        </View>
      </View>

      <BottomTab />
    </View>
  );
};

export default ShowActivities;

const styles = StyleSheet.create({});
