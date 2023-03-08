import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../theme/colors';
import Modal from 'react-native-modal';
import {blacklogo, cross, whatsapp} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomTab from '../../../components/BottomTab';
const GiftVoucher = () => {
  const [isModalVisible, setModalVisible] = useState(true);

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
          Gift Vouchers
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: '#FBFBFB',
              borderRadius: 7,
              paddingVertical: 20,
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={cross}
                style={{height: 80, width: 80}}
                resizeMode="contain"
              />
              <View style={{marginVertical: 20}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
                  20% Cash Back on{' '}
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: colors.secondary,
                    }}>
                    14th February
                  </Text>
                </Text>
                <Text style={{textAlign: 'center'}}>
                  Valid until 14 feb 2023
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.secondary,
                    width: '60%',
                    alignItems: 'center',
                    padding: 10,
                    marginLeft: 45,
                    marginVertical: 20,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                    USE NOW
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#009F0B',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  PROMO APPLIED
                </Text>
              </View>
              {/* <View>
           
              </View> */}
            </View>
          </View>
        </Modal>
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

export default GiftVoucher;

const styles = StyleSheet.create({});
