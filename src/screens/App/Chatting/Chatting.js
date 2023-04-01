import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import {blacklogo, messagedp} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Chatting = () => {
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
          top: 42,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      /> */}
      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 5,
          marginVertical:Platform.OS=="ios"?20: 10,

        }}>
        <View style={{width: '10%'}}>
          <AntDesign name={'arrowleft'} size={30} color={'black'} />
        </View>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Live Chat
          </Text>
        </View>
        <View style={{width: '10%'}}>
          <MaterialIcons name={'call'} size={30} color={'black'} />
        </View>
      </View>
      <ScrollView style={styles.container1}>
        <View style={styles.textSendView}>
          <Text style={styles.textSend}>
            Hello i've arrived at your location.Please come quickly
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            paddingBottom: 15,
            paddingHorizontal:10
          }}>
          <Image source={messagedp} />
          <Text style={styles.textReceived}>i'ill be out in a minute.</Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          bottom:0,
          width: '100%',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 8,
          paddingVertical:Platform.OS=="ios"?20:0
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: '70%'}}>
            <TextInput style={styles.input} placeholder="Type your message" />
          </View>
          <View
            style={{
              width: '30%',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <View style={{borderLeftWidth: 1, paddingLeft: 20}}></View>
            <View>
              <Text style={{color: '#5491F5'}}>Send</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  textReceived: {
    color: '#000000',
    paddingLeft: 10,
  },
  textSendView: {
    backgroundColor: '#C2D0E9',
    marginHorizontal: 10,
    marginLeft: 60,
    paddingHorizontal: 20,
    width: '80%',
    paddingVertical: 10,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginVertical: 20,
  },
  textSend: {},
  input:{
    paddingLeft:10
  }
});
