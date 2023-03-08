import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BottomTab from '../../../components/BottomTab';
import {blacklogo, whatsapp} from '../../../assets';

const Contact = () => {
  const [dropview, setdropview] = useState(1);
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
          Contact Us
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '47%'}}>
              <Text
                style={{
                  paddingLeft: 2,
                  marginVertical: 10,
                  color: 'black',
                  fontSize: 16,
                }}>
                Name
              </Text>
              <TextInput placeholder="Name" style={styles.input} />
            </View>
            <View style={{width: '47%'}}>
              <Text
                style={{
                  paddingLeft: 2,
                  marginVertical: 10,
                  color: 'black',
                  fontSize: 16,
                }}>
                Phone
              </Text>
              <TextInput placeholder="Phone" style={styles.input} />
            </View>
          </View>
          <View style={{}}>
            <Text
              style={{
                paddingLeft: 2,
                marginVertical: 20,
                color: 'black',
                fontSize: 16,
              }}>
              Email
            </Text>
            <TextInput placeholder="Phone" style={styles.input} />
          </View>
          <View style={{}}>
            <Text
              style={{
                paddingLeft: 2,
                marginVertical: 20,
                color: 'black',
                fontSize: 16,
              }}>
              Message
            </Text>
          </View>
          {dropview == 1 && (
            <View
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 10,
                height: 110,
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                }}>
                <View style={{}}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      paddingVertical: 7,
                    }}>
                    Select Subject
                  </Text>
                </View>
                <View>
                  <AntDesign
                    name="caretdown"
                    color={'black'}
                    size={16}
                    onPress={() => {
                      setdropview(2);
                    }}
                  />
                </View>
              </View>
            </View>
          )}
          {dropview == 2 && (
            <View
              style={{borderWidth: 1, borderColor: 'gray', borderRadius: 10}}>
              <View
                style={{
                  flexDirection: 'row',

                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                }}>
                <View style={{}}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      paddingVertical: 7,
                    }}>
                    Can't apply Promo Code?
                  </Text>
                </View>
                <View>
                  <AntDesign
                    name="caretdown"
                    color={'black'}
                    size={16}
                    onPress={() => {
                      setdropview(1);
                    }}
                  />
                </View>
              </View>
              <View style={{}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    borderBottomWidth: 1,
                    borderBottomColor: 'gray',
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                  }}>
                  Can't select location?
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    paddingVertical: 7,

                    paddingHorizontal: 10,
                  }}>
                  Can't locate driver?
                </Text>
              </View>
            </View>
          )}

          <TouchableOpacity
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#C70118',
              padding: 12,
              borderRadius: 25,
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#C70118',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 70,
          }}>
          <Image source={whatsapp} style={{width: 90, height: 90}} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
