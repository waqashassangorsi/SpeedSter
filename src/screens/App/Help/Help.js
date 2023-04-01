import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../../../components/BottomTab';
import {blacklogo, whatsapp} from '../../../assets';
import {ScrollView} from 'react-native-gesture-handler';

const Help = () => {
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
      {/* <Badge
        size={100}
        status="warning"
        value="1"
        containerStyle={{
          position: 'absolute',
          right: 27,
          top:Platform.OS=="ios"?22: 42,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      /> */}
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginVertical:Platform.OS=="ios"?20: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Help
          </Text>
          <Entypo
            name={'cross'}
            size={30}
            color={'black'}
            style={{position: 'absolute', right: 7}}
          />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={{marginVertical: 20, color: 'black', paddingLeft: 2}}>
            Lorem Ipsum is simply dummy text of these{'\n'} printing and
            typesetting industry.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
              <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                1-
              </Text>
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
              <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                2-
              </Text>
            </View>
            <View style={{width: '90%'}}>
              <Text style={{color: 'black'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 15}}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
              Some Heading here
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '10%'}}>
              <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                1-
              </Text>
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
              <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                2-
              </Text>
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
            // paddingHorizontal: 5,
            marginTop:Platform.OS=="ios"?120: 80,
            paddingBottom: 80,
          }}>
          <Image source={whatsapp} style={{width: 90, height: 90}} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({});
