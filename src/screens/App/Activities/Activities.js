import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import React from 'react';
import {Header, Badge} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../theme/colors';
import BottomTab from '../../../components/BottomTab';
import {blacklogo, Persons, whatsapp} from '../../../assets';
import SelectDropdown from 'react-native-select-dropdown';
import {ScrollView} from 'react-native-gesture-handler';

const Data = [1, 2];

const Activities = () => {
  const countries = ['Last week', 'Last month', 'Show all deliveries'];
  const renderItem = ({title}) => (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <View style={{width: '20%'}}>
          <Image
            source={Persons}
            style={{width: 60, height: 60, borderRadius: 30 / 2, marginTop: 5}}
            resizeMode="contain"
          />
        </View>
        <View style={{width: '50%', paddingLeft: 5, paddingTop: 10}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Parcel Delivery
          </Text>
          <Text style={{paddingTop: 5}}>1721 Naud Street</Text>
          <Text style={{paddingTop: 5, color: colors.secondary}}>$0.00</Text>
        </View>
        <View
          style={{
            width: '30%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 55,
          }}>
          <Text style={{paddingTop: 5}}>15-jan-2023</Text>
        </View>
      </View>
    </View>
  );

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: colors.secondary,
          marginVertical: 20,
        }}
      />
    );
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
            styles={{width: 40, height: 40}}
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
          top: 40,
          scaleX: 0.6,
          scaleY: 0.6,
        }}
      /> */}
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Activities
          </Text>
          <Entypo
            name={'cross'}
            size={30}
            color={'black'}
            style={{position: 'absolute', right: 7}}
          />
        </View>
        <View
          style={{
            marginHorizontal: 15,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: colors.secondary,
            padding: 12,
            marginVertical: 15,
          }}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            Recent Delivery
          </Text>
          <View style={{position: 'absolute', right: 0}}>
            <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Last 15 Days'}
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
                    color={'white'}
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
        </View>
        <View
          style={{
            marginTop: 15,
            borderColor: colors.secondary,
            borderWidth: 0.3,
            paddingVertical: 20,
          }}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemDivider}
          />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            marginTop:Platform.OS=="ios"?150: 90,
            paddingBottom: 80,
          }}>
          <Image source={whatsapp} style={{width: 90, height: 90}} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Activities;

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    height: 45,
    backgroundColor: colors.secondary,
    borderRadius: 25,
    marginLeft: -4,
    color: 'white',
  },
  dropdown1BtnTxtStyle: {color: 'white'},
  dropdown1DropdownStyle: {
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: colors.secondary,
    borderWidth: 1.5,
    marginTop:Platform.OS=="ios"?-5: -25,
    borderTopWidth: 2,
    borderTopColor: colors.secondary,
    height: 150,
  },
  dropdown1RowStyle: {
    backgroundColor: 'white',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 2,
    marginHorizontal: 5,
  },
  dropdown1RowTxtStyle: {
    color: colors.secondary,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
