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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {blacklogo} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../theme/colors';
import BottomTab from '../../../components/BottomTab';
const Paypal = () => {
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
          Add PayPal
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <View style={{marginHorizontal: 10}}>
        <View style={{marginTop: 20}}>
          <Text style={{paddingLeft: 5, color: 'black', fontWeight: 'bold'}}>
            Account Number
          </Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={{paddingLeft: 5, color: 'black', fontWeight: 'bold'}}>
            Name
          </Text>
          <TextInput style={styles.input} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <TouchableOpacity style={{}}>
            <Ionicons
              name={'checkbox-sharp'}
              color={colors.secondary}
              size={30}
              // style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 3,
                fontWeight: 'bold',
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
            borderColor: colors.primary,
            padding: 12,
            borderRadius: 25,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#C70118'}}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
      <BottomTab />
    </View>
  );
};

export default Paypal;

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 20,
  },
});
