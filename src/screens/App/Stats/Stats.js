import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {Header} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Persons} from '../../../assets';
import {ScrollView} from 'react-native-gesture-handler';
var data = [1, 2, 3];
const Stats = () => {
  const renderPhoto = ({item, index}) => {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Image
              style={{height: 100, width: 100}}
              resizeMode="contain"
              source={Persons}
            />
            <Text>Sedan</Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              $7.99
              <Text style={{color: 'gray', fontWeight: 'normal'}}>/ml</Text>
            </Text>
          </View>
          {itemSeparatorComponent()}
        </View>
        <View></View>
      </View>
    );
  };
  const itemSeparatorComponent = () => {
    return (
      <View
        style={{
          width: 15,
        }}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header
        containerStyle={{
          marginVertical: 5,
        }}
        backgroundColor={'transparent'}
        leftComponent={
          <View
            style={{
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              marginLeft: 20,
              width: '55%',
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 7,
            }}>
            <Octicons
              name={'three-bars'}
              size={25}
              color={colors.yellow}
              onPress={() => {}}
              style={{alignSelf: 'center'}}
            />
          </View>
        }
        rightComponent={
          <View
            style={{
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              marginRight: 20,
              width: '55%',
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 7,
            }}>
            <Ionicons
              name={'ios-notifications-outline'}
              size={25}
              color={colors.yellow}
              onPress={() => {}}
              style={{alignSelf: 'center'}}
            />
          </View>
        }
      />
      {/* #fcf7e4 */}
      <ScrollView>
        <View
          style={{
            flex: 0.9,
            marginHorizontal: 30,
            paddingTop: 40,
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>Your Stats</Text>
          <View
            style={{
              backgroundColor: '#fcf7e4',
              padding: 20,
              borderRadius: 20,
              marginTop: 30,
            }}>
            <Text style={{fontSize: 16, color: 'black'}}>
              Track your Shipment
            </Text>
            <Text style={{fontSize: 12}}>
              Type your tracking number{'\n'} and find your number
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 40}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  width: '30%',
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text>Track</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '30%',
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 10,
                  marginLeft: 10,
                }}>
                <Text>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 1, marginHorizontal: 30, marginTop: 30}}>
          <Text style={{fontSize: 18, color: 'black'}}>Quick Order</Text>
          <View style={{marginTop: 30}}>
            <FlatList
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={data}
              renderItem={item => renderPhoto(item)}
              //   style={{height: '100%'}}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Stats')}
            style={{
              width: '90%',
              height: 50,
              backgroundColor: colors.yellow,
              borderRadius: 13,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({});
