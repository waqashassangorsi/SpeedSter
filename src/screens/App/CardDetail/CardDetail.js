import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {blacklogo} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../theme/colors';
import BottomTab from '../../../components/BottomTab';
import {ScrollView} from 'react-native-gesture-handler';
const CardDetail = () => {
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
          Add Card Details
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <View style={{marginTop: 20}}>
            <Text style={{paddingLeft: 0, color: 'black', fontWeight: 'bold'}}>
              Card Number
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={{paddingLeft: 0, color: 'black', fontWeight: 'bold'}}>
              Card Holder Name
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '47%'}}>
              <Text
                style={{
                  paddingLeft: 0,
                  marginVertical: 5,
                  color: 'black',
                  fontSize: 16,
                }}>
                Expiry
              </Text>
              <TextInput placeholder="MM/YYY" style={styles.input} />
            </View>
            <View style={{width: '47%'}}>
              <Text
                style={{
                  paddingLeft: 0,
                  marginVertical: 5,
                  color: 'black',
                  fontSize: 16,
                }}>
                CVV
              </Text>
              <TextInput placeholder="(3 Digits)" style={styles.input} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity style={{}}>
              <AntDesign
                name={'checksquareo'}
                color={colors.primary}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 3,
                }}>
                Save this card for a faster checkout next time
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: colors.secondary,
              padding: 12,
              borderRadius: 25,
              marginTop: 30,
              marginBottom: 100,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: colors.secondary,
              }}>
              Pay Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 20,
    paddingLeft: 10,
  },
});
