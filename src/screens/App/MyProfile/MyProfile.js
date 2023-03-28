import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../theme/colors';
import BottomTab from '../../../components/BottomTab';
import {blacklogo, Person1, Persons} from '../../../assets';
const ImagePicker = require('react-native-image-picker');
import SelectDropdown from 'react-native-select-dropdown';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const MyProfile = ({}) => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const [profilePath, setFilePath] = useState('');
  const navigation = useNavigation();

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
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        containerStyle={{}}
        backgroundColor={'transparent'}
        leftComponent={
          <Octicons
            name={'three-bars'}
            size={30}
            color={'black'}
            style={{}}
            onPress={() => navigation.openDrawer()}
          />
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
          My Profile
        </Text>
        <Entypo
          name={'cross'}
          size={30}
          color={'black'}
          style={{position: 'absolute', right: 7}}
        />
      </View>
      <ScrollView style={{}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          {profilePath !== '' && (
            <Image
              source={profilePath}
              style={{height: 120, width: 120, borderRadius: 120 / 2}}
            />
          )}
          {profilePath == '' && (
            <Image
              source={Person1}
              style={{height: 120, width: 120, borderRadius: 120 / 2}}
            />
          )}
          <TouchableOpacity
            onPress={() => chooseFile()}
            style={{
              width: '12%',
              backgroundColor: colors.secondary,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              paddingLeft: 5,
              height: 42,
              borderRadius: 40,
              position: 'absolute',
              top: 85,
              right: 125,
            }}>
            <MaterialIcons
              name={'edit'}
              size={24}
              color={'white'}
              style={{alignSelf: 'center', paddingTop: 10, paddingRight: 7}}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                My Profile
              </Text>
            </View>
            <View
              style={{
                borderLeftWidth: 2.1,
                borderLeftColor: 'black',
                height: 25,
                marginLeft: 15,
              }}></View>
            <View>
              <Text
                style={{
                  color: colors.secondary,
                  fontSize: 20,
                  paddingLeft: 20,
                }}>
                Edit
              </Text>
            </View>
          </View>
        </View>

        <TextInput
          placeholder="Enter your name"
          placeholderTextColor={'black'}
          style={{
            height: 50,
            borderBottomColor: colors.primary,
            borderBottomWidth: 0.3,
            marginHorizontal: 10,
          }}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={'black'}
          style={{
            height: 50,
            borderBottomColor: colors.primary,
            borderBottomWidth: 0.3,
            marginHorizontal: 10,
          }}
        />
        <TextInput
          placeholder="Phone no"
          placeholderTextColor={'black'}
          style={{
            height: 50,
            borderBottomColor: colors.primary,
            borderBottomWidth: 0.3,
            marginHorizontal: 10,
          }}
        />
        <View style={{marginHorizontal: 10}}>
          <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Select your city'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#444'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
        <TextInput
          placeholder="Address"
          placeholderTextColor={'black'}
          style={{
            height: 50,
            borderBottomColor: colors.primary,
            borderBottomWidth: 0.3,
            marginHorizontal: 10,
            marginBottom: 150,
          }}
        />
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.primary,
  },
  dropdown1BtnTxtStyle: {
    color: '#444',
    textAlign: 'left',
    fontSize: 14,
    marginLeft: -3,
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});
