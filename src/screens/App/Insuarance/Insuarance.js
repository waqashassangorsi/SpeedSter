import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {blacklogo, halfcircle, Persons, whatsapp} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
const Insuarance = () => {
  return (
    <View style={{flex: 1}}>
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
          Insurances
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <View style={{marginHorizontal: 10}}>
        <Text style={{marginVertical: 20, color: 'black'}}>
          Lorem Ipsum is simply dummy text of these{'\n'} printing and
          typesetting industry.
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '10%'}}>
            <Image source={halfcircle} />
          </View>
          <View style={{width: '90%'}}>
            <Text style={{color: 'black'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <View style={{width: '10%'}}>
            <Image source={halfcircle} />
          </View>
          <View style={{width: '90%'}}>
            <Text style={{color: 'black'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '10%'}}>
            <Image source={halfcircle} />
          </View>
          <View style={{width: '90%'}}>
            <Text style={{color: 'black'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <View style={{width: '10%'}}>
            <Image source={halfcircle} />
          </View>
          <View style={{width: '90%'}}>
            <Text style={{color: 'black'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
      </View>
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
      <BottomTab />
    </View>
  );
};

export default Insuarance;

const styles = StyleSheet.create({});