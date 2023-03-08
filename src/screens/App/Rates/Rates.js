import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Persons, logo, blacklogo, whatsapp} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
const Data = [1, 2, 3];
const Rates = () => {
  const renderItem = ({title}) => (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          paddingTop: 5,
        }}>
        <View style={{width: '20%'}}>
          <Image
            source={Persons}
            style={{width: 50, height: 50, borderRadius: 30 / 2}}
            resizeMode="contain"
          />
        </View>
        <View style={{width: '40%', paddingLeft: 15}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Small
          </Text>
          <Text style={{paddingTop: 5}}>Less than 30 lbs</Text>
        </View>
        <View
          style={{
            width: '40%',
            alignItems: 'flex-end',
          }}>
          <Text style={{paddingTop: 5, fontWeight: 'bold', color: 'black'}}>
            $ 0-$270.00
          </Text>
        </View>
      </View>
    </View>
  );

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#ccc',
          marginVertical: 20,
        }}
      />
    );
  };
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
        value="1"
        containerStyle={{
          position: 'absolute',
          right: 27,
          top: 40,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      />
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Rates
          </Text>
          <Entypo
            name={'cross'}
            size={30}
            color={'black'}
            style={{position: 'absolute', right: 7}}
          />
        </View>
        <View
          style={{
            marginTop: 15,
            borderWidth: 1,
            borderColor: '#ccc',
            paddingVertical: 15,
          }}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemDivider}
          />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            // paddingHorizontal: 5,
            marginTop: 120,
            paddingBottom: 80,
          }}>
          <Image source={whatsapp} style={{width: 90, height: 90}} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Rates;

const styles = StyleSheet.create({});
