import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  john,
  menu,
  blacklogo,
  circledot,
  marker,
  call,
  smallbox,
  smallwallet,
  whatsapp,
} from '../../../assets';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import colors from '../../../theme/colors';
import BottomTab from '../../../components/BottomTab';
import {ScrollView} from 'react-native-gesture-handler';

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
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 15,
            paddingHorizontal: 10,
          }}>
          <View style={{width: '20%', paddingTop: 7}}>
            <Image source={john} />
          </View>
          <View
            style={{
              width: '40%',
              paddingTop: 15,
              paddingLeft: 27,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
              John Adams
            </Text>
            <Text style={{fontSize: 12}}>3Km Away - 12 mins</Text>
          </View>
          <View
            style={{
              width: '18%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingTop: 15,
            }}>
            <Text style={{fontSize: 15}}>4.1</Text>
            <Entypo name="star" color={'#FFA800'} size={20} />
          </View>
          <View style={{width: '18%', paddingTop: 15}}>
            <Text style={{fontSize: 15}}>Reviews</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <View>
            <Image source={circledot} />
          </View>
          <View>
            <Text style={{color: 'black', paddingTop: 10, fontWeight: 'bold'}}>
              Pickup
            </Text>
            <Text style={{fontSize: 12}}>Naud st 7 Los Angeles</Text>
          </View>
        </View>
        <View
          style={{
            borderLeftWidth: 1.3,
            borderLeftColor: colors.secondary,
            height: 50,
            marginLeft: 20,
            position: 'absolute',
            top: 130,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginLeft: 14,
          }}>
          <View>
            <Image source={marker} />
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                paddingTop: 10,
                paddingLeft: 10,
                fontWeight: 'bold',
              }}>
              Drop Off
            </Text>
            <Text style={{fontSize: 12, paddingLeft: 10}}>
              Naud st 7 Los Angeles
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            marginHorizontal: 13,
          }}>
          <View style={{width: '4%'}}>
            <Image source={call} />
          </View>
          <View style={{paddingLeft: 10, width: '60%'}}>
            <Text style={{color: 'black', paddingTop: 10, fontWeight: 'bold'}}>
              Driver phone
            </Text>
            <Text style={{fontSize: 12}}>+1 333 333 333</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              width: '36%',
            }}>
            <Text style={{fontSize: 14, color: '#2D62B9'}}>Dial</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            marginHorizontal: 13,
          }}>
          <View style={{width: '4%'}}>
            <Image source={smallbox} />
          </View>
          <View style={{paddingLeft: 10, width: '60%'}}>
            <Text style={{color: 'black', paddingTop: 10, fontWeight: 'bold'}}>
              Parcel Details
            </Text>
            <Text style={{fontSize: 12}}>6 pair of shoes - Almost 2 Lbs</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              width: '36%',
            }}>
            <Text style={{fontSize: 14, color: colors.secondary}}>
              ( Track Order )
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            marginHorizontal: 13,
          }}>
          <View style={{width: '4%'}}>
            <Image source={smallwallet} />
          </View>
          <View style={{paddingLeft: 10, width: '60%'}}>
            <Text style={{color: 'black', paddingTop: 10, fontWeight: 'bold'}}>
              Estimated Fair
            </Text>
            <Text style={{fontSize: 12, color: colors.secondary}}>
              $ 250.00
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            paddingTop: 60,
            paddingBottom: 60,
          }}>
          <Image source={whatsapp} style={{width: 90, height: 90}} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default RideDetail;

const styles = StyleSheet.create({});
