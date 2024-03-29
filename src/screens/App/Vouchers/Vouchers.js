import {StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';
import React,{useState} from 'react';
import BottomTab from '../../../components/BottomTab';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import {
  blacklogo,
  cross,
  Persons,
  Logo2,
  cycle,
  whatsapp,
} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const Vouchers = () => {
  const [isModalVisible, setModalVisible] = useState(false);

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
      {/* <Badge
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
      /> */}
      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
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
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              paddingVertical: 10,
            }}>
            Current Vouchers
          </Text>
          <View
            style={{
              flexDirection: 'row',
              elevation: 4,
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              justifyContent: 'space-between',
              paddingVertical: 20,
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{width: '20%'}}>
              <Image
                source={Persons}
                style={{width: 70, height: 70, borderRadius: 70 / 2}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '55%', paddingLeft: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#eaf2ff',
                  width: '70%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  padding: 2,
                }}>
                <Text
                  style={{color: '#5491f5', fontSize: 12, fontWeight: 'bold'}}>
                  Limited Offer
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 3,
                  paddingTop: 5,
                }}>
                First Delivery free
              </Text>
              <Text style={{paddingTop: 10, paddingLeft: 3}}>
                Valid until 1st Mar 2023
              </Text>
            </View>
            <TouchableOpacity onPress={()=>setModalVisible(true)} style={{width: '20%', justifyContent: 'flex-end'}}>
              <Text style={{color: '#5491f5'}}>Use Now</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              elevation: 4,
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              justifyContent: 'space-between',
              paddingVertical: 20,
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{width: '20%'}}>
              <Image
                source={Persons}
                style={{width: 70, height: 70, borderRadius: 70 / 2}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '55%', paddingLeft: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffe7ea',
                  width: '70%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  padding: 3,
                }}>
                <Text
                  style={{color: '#c70118', fontSize: 12, fontWeight: 'bold'}}>
                  Limited Offer
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 3,
                  paddingTop: 5,
                }}>
                20% Cash Back on{' '}
              </Text>
              <Text style={{paddingTop: 10, paddingLeft: 3}}>
                Valid until 1st Mar 2023
              </Text>
            </View>
            <View
              style={{
                width: '20%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Text style={{color: '#c70118'}}>Use Now</Text>
            </View>
            <Text
              style={{
                color: '#c70118',
                fontWeight: 'bold',
                position: 'absolute',
                right: 10,
                top: 47.5,
                fontSize: 16,
              }}>
              14th Feburary
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              paddingVertical: 15,
            }}>
            Upcoming Vouchers
          </Text>
          <View
            style={{
              flexDirection: 'row',
              elevation: 4,
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              justifyContent: 'space-between',
              paddingVertical: 20,
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{width: '20%'}}>
              <Image
                source={Persons}
                style={{width: 70, height: 70, borderRadius: 70 / 2}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '55%', paddingLeft: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#eaf2ff',
                  width: '70%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  padding: 3,
                }}>
                <Text
                  style={{color: '#5491f5', fontSize: 12, fontWeight: 'bold'}}>
                  Limited Offer
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 3,
                  paddingTop: 5,
                }}>
                First Delivery free
              </Text>
              <Text style={{paddingTop: 10, paddingLeft: 3}}>
                Valid until 1st Mar 2023
              </Text>
            </View>
            <View style={{width: '20%', justifyContent: 'flex-end'}}>
              <Text style={{color: '#5491f5'}}>Use Now</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              elevation: 4,
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              justifyContent: 'space-between',
              paddingVertical: 20,
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{width: '45%'}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                Save more using
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
                GrabRewards points!
              </Text>
              <Text style={{color: '#5491f5', paddingTop: 10}}>
                View Details
              </Text>
            </View>
            <View style={{width: '45%', alignItems: 'center', paddingLeft: 20}}>
              <Image
                source={cycle}
                style={{width: 80, height: 80}}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
            style={{
              marginBottom: 80,
            }}>
            <View
              style={{
                position: 'absolute',
                bottom: -18,
                right: -17,
              }}>
              <Image source={whatsapp} style={{width: 90, height: 90}} />
            </View>
          </View>
        </View>
      </ScrollView>
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
                <TouchableOpacity onPress={()=>setModalVisible(false)}
                  style={{
                    backgroundColor: colors.secondary,
                    // width: '70%',
                    alignItems: 'center',
                    padding: 10,
                    // marginLeft:Platform.OS=="ios"?45: 45,
                    marginVertical: 20,
                    borderRadius: 20,
                    marginHorizontal:40
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
                    fontSize: 14,
                    // fontWeight: 'bold',
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

export default Vouchers;

const styles = StyleSheet.create({});
