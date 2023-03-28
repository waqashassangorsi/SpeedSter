import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {blacklogo, box, Person1} from '../../../assets';
import BottomTab from '../../../components/BottomTab';
import colors from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Persons} from '../../../assets';
import RBSheet from 'react-native-raw-bottom-sheet';
const ImagePicker = require('react-native-image-picker');

const Data = [1, 2, 3];

const AddParcel = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const [profilePath, setFilePath] = useState('');
  const [count, setCount] = useState(0);

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
        setCount(count + 1);
      }
    });
  };
  const updateProfile = async id => {
    const formData = new FormData();

    if (profilePath != '') {
      formData.append('image', {
        uri: profilePath.uri,
        name: profilePath.fileName,
        type: profilePath.type,
      });
    }
  };
  // const handleAddView = () => {
  //   setCount(count + 1);
  // };
  const renderViews = () => {
    const views = [];
    for (let i = 0; i < count; i++) {
      views.push(
        <View key={i}>
          <Image
            source={profilePath}
            style={{height: 100, width: 100, borderRadius: 10, marginLeft: 10}}
            resizeMode="cover"
          />
        </View>,
      );
    }
    return views;
  };
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

      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Add Parcel Details
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{fontSize: 18, color: 'black', paddingTop: 10}}>
            Parcel Image<Text style={{color: colors.secondary}}>*</Text>
          </Text>

          <ScrollView
            horizontal={true}
            style={{
              flexDirection: 'row',
              marginVertical: 20,
            }}>
            {/* <TouchableOpacity onPress={() => chooseFile()}>
              {profilePath !== '' && (
                <Image
                  source={profilePath}
                  style={{height: 100, width: 100, borderRadius: 10}}
                  resizeMode="cover"
                />
              )}
              {profilePath == '' && (
                <Image
                  source={Persons}
                  style={{height: 100, width: 100}}
                  resizeMode="cover"
                />
              )}
            </TouchableOpacity> */}
            {renderViews()}

            <View
              style={{
                width: 100,
                borderColor: 'gray',
                borderWidth: 1,
                borderStyle: 'dotted',
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
                marginLeft: 10,
              }}>
              <AntDesign
                name="plus"
                color={'gray'}
                size={20}
                onPress={chooseFile}
              />
            </View>
          </ScrollView>
          <Text style={{fontSize: 18, color: 'black', paddingTop: 12}}>
            Parcel Description<Text style={{color: colors.secondary}}>*</Text>
          </Text>
          <TextInput
            placeholder="Parcel name and detail"
            style={styles.input}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{}}>
              <AntDesign name={'checksquareo'} color={'#444444'} size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 3,
                  color: '#444444',
                  fontWeight: 'bold',
                }}>
                Need Insurance
              </Text>
            </TouchableOpacity>
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
                  color: colors.secondary,
                  fontWeight: 'bold',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            //
            onPress={() => refRBSheet.current.open()}
            style={{
              borderWidth: 1,
              borderColor: '#C70118',
              marginTop: 70,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 50,
              padding: 8,
              marginBottom: 100,
              borderRadius: 20,
            }}>
            <Text style={{color: '#C70118', fontSize: 18, fontWeight: 'bold'}}>
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={false}
          closeOnPressMask={true}
          height={300}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
            },

            container: {
              backgroundColor: 'transparent',
            },
          }}>
          <View
            style={
              {
                // flexDirection: 'row',
                // justifyContent: 'space-evenly',
                // paddingTop: 100,
              }
            }>
            <Image
              source={box}
              style={{height: 450, marginTop: -50, resizeMode: 'contain'}}
            />
            {/* <TouchableOpacity
              style={{
                width: '40%',
                borderColor: colors.primary,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Deliver Later
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '40%',
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Deliver Now
              </Text>
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              position: 'absolute',
              bottom: 70,
              left: 15,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchDriver')}
              style={{
                width: '46%',
                borderColor: colors.primary,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Deliver Later
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '46%',
                backgroundColor: colors.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Deliver Now
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default AddParcel;

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 20,
    paddingLeft: 10,
  },
});
