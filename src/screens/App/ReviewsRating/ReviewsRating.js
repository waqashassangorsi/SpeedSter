import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native-gesture-handler';
import {Persons, logo, blacklogo} from '../../../assets';
import colors from '../../../theme/colors';
import {Divider} from 'react-native-paper';
import BottomTab from '../../../components/BottomTab';
const Data = [1, 2, 3];
const ReviewsRating = () => {
  const renderItem = ({title}) => (
    <View>
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <View style={{width: '20%'}}>
          <Image
            source={Persons}
            style={{width: 60, height: 60}}
            resizeMode="contain"
          />
        </View>
        <View style={{width: '30%', paddingLeft: 5, paddingTop: 10}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Julian98
          </Text>
          <Text style={{paddingTop: 5}}>23 Feb 2020</Text>
        </View>
        <View
          style={{
            width: '50%',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Entypo name={'star'} size={20} color={'#ffa800'} style={{}} />
            <Entypo name={'star'} size={20} color={'#ffa800'} style={{}} />
            <Entypo name={'star'} size={20} color={'#ffa800'} style={{}} />
            <Entypo name={'star'} size={20} color={'#ffa800'} style={{}} />
            <Entypo name={'star'} size={20} color={'#ffa800'} style={{}} />
          </View>
          <Text style={{paddingTop: 14}}>Laptop Delivery</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <Text>Very Excellent and smart driver</Text>
      </View>
    </View>
  );

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
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
            styles={{width: 30, height: 40}}
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

      <View
        style={{
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Reviews and Ratings
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>

      <View style={{marginTop: 15}}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemDivider}
        />
      </View>
      <BottomTab />
    </View>
  );
};

export default ReviewsRating;

const styles = StyleSheet.create({});
