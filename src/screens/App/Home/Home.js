import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Header} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import {
  blacklogo,
  car,
  Persons,
  bus,
  truck,
  promo,
  Person1,
  whatsapp,
} from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTab from '../../../components/BottomTab';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import colors from '../../../theme/colors';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Calendar} from 'react-native-calendars';
import {CalendarList} from 'react-native-calendars';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

const Data = [1, 2, 3];
const SLIDER_WIDTH = 400;
const ITEM_WIDTH = 400;
const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('time');
  const [isDisplayDate, setShow] = useState(false);

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const [region, setRegion] = useState({
    latitude: 33.684422, ////42.7339
    longitude: 73.047882, ////25.4858
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const marked = {
    '2023-03-07': {marked: true},
    '2023-03-07': {
      selected: true,
      selectedColor: '#aa2222',
      selectedTextColor: 'white',
    },
  };
  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const displayDatepicker = () => {
    showMode('time');
  };
  const renderItem = ({title}) => (
    <View style={{flexDirection: 'row', marginLeft: 10}}>
      <View
        style={{
          backgroundColor: '#ffe1e4',
          paddingVertical: 10,
          paddingHorizontal: 45,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Text style={{color: 'black', fontSize: 16, marginLeft: -20}}>
          100 % of on your
        </Text>
        <Text
          style={{
            color: colors.primary,
            fontSize: 22,
            fontWeight: 'bold',
            paddingVertical: 5,
            marginLeft: -20,
          }}>
          First Delivery
        </Text>
        <Text style={{color: 'black', marginLeft: -20}}>
          by using promo 1003
        </Text>
      </View>
      <View style={{}}>
        <Image
          source={Person1}
          style={{borderRadius: 10, width: 133, height: 140}}
          resizeMode="cover"
        />
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        containerStyle={{}}
        backgroundColor={'transparent'}
        leftComponent={
          <Octicons name={'three-bars'} size={30} color={'black'} style={{}} />
        }
        centerComponent={<Image source={blacklogo} resizeMode="contain" />}
        rightComponent={
          <MaterialCommunityIcons
            name={'gift'}
            size={30}
            color={'black'}
            style={{}}
          />
        }
      />
      <ScrollView style={{paddingBottom: 100}}>
        <View style={{marginVertical: 10}}>
          <Carousel
            ref={isCarousel}
            data={Data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={index => setIndex(index)}
          />
          <View style={{position: 'absolute', bottom: 0, left: 5}}>
            <Pagination
              dotsLength={Data.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                // marginHorizontal: 8,
                // backgroundColor: '#F4BB41',
                // marginTop: -10,
                // marginLeft: -50,
              }}
              tappableDots={true}
              inactiveDotStyle={{
                backgroundColor: 'black',
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </View>

        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              color: 'black',
              paddingTop: 15,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Select Package
          </Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '31%',
                backgroundColor: '#ffefe5',
                borderRadius: 15,
                paddingHorizontal: 8,
                paddingVertical: 12,
              }}>
              <Image source={promo} style={{}} />
              <Image source={car} style={{alignSelf: 'flex-end'}} />
              <Text style={{color: 'black'}}>Small</Text>
            </View>
            <View
              style={{
                width: '31%',
                backgroundColor: '#f0f6ff',
                borderRadius: 15,
                paddingHorizontal: 8,
                paddingVertical: 12,
              }}>
              <Image
                source={bus}
                style={{alignSelf: 'flex-end', marginTop: 17}}
              />
              <Text style={{color: 'black', paddingTop: 2}}>Medium</Text>
            </View>
            <View
              style={{
                width: '31%',
                backgroundColor: '#fffee7',
                borderRadius: 15,
                paddingHorizontal: 8,
                paddingVertical: 12,
              }}>
              <Image
                source={truck}
                style={{alignSelf: 'flex-end', marginTop: 17}}
              />
              <Text style={{color: 'black', paddingTop: 2}}>Large</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              marginVertical: 20,
            }}>
            <View style={{width: '10%', paddingTop: 20}}>
              <View>
                <FontAwesome
                  name="circle"
                  color={'#d9d9d9'}
                  style={{paddingLeft: 5}}
                />
              </View>
              <View
                style={{
                  borderLeftWidth: 2,
                  borderLeftColor: colors.primary,
                  height: 50,
                  marginLeft: 9,
                }}></View>

              <View>
                <MaterialCommunityIcons
                  name="square"
                  color={colors.primary}
                  style={{paddingLeft: 5}}
                />
              </View>
              <View style={{paddingTop: 35}}>
                <AntDesign
                  name="calendar"
                  color={colors.primary}
                  size={20}
                  onPress={() =>
                    //displayDatepicker()
                    setModalVisible(true)
                  }
                />
              </View>
            </View>
            <View style={{width: '80%'}}>
              <TextInput placeholder="Select pick up" style={styles.input} />
              <View>
                <TextInput placeholder="Select drop off" style={styles.input} />
                <AntDesign
                  style={styles.plus}
                  name="pluscircle"
                  size={24}
                  color={colors.primary}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="When"
                placeholderTextColor={'black'}
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Add multiple delivery"
                  placeholderTextColor={'black'}
                />

                <EvilIcons
                  style={styles.eye1}
                  name="close-o"
                  size={24}
                  color="#000"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor={'black'}
                />

                <EvilIcons
                  style={styles.eye1}
                  name="close-o"
                  size={24}
                  color="#000"
                />
              </View>
            </View>
            <View style={{width: '10%', paddingTop: 40}}>
              <View>
                <Fontisto name="arrow-v" color={'black'} size={20} />
              </View>
            </View>
          </View>
        </View>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 15,
            }}>
            <View
              style={{
                backgroundColor: '#eeeeee',
                width: '10%',
                borderRadius: 30,
                padding: 5,
              }}>
              <Fontisto name="home" size={22} style={{alignSelf: 'center'}} />
            </View>
            <View>
              <Text
                style={{paddingLeft: 20, color: 'black', fontWeight: 'bold'}}>
                Home
              </Text>
              <Text style={{paddingLeft: 20}}>1725 Naud Street</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 15,

              marginVertical: 10,
            }}>
            <View
              style={{
                backgroundColor: '#eeeeee',
                width: '10%',
                borderRadius: 30,
                padding: 5,
              }}>
              <Foundation name="star" size={22} style={{alignSelf: 'center'}} />
            </View>
            <View>
              <Text
                style={{paddingLeft: 20, color: 'black', fontWeight: 'bold'}}>
                Bestia
              </Text>
              <Text style={{paddingLeft: 20}}>
                Italian Resturant 2121 E 7th PI
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            paddingHorizontal: 15,
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            paddingTop: 20,
          }}>
          Nearby
        </Text>
        <View style={{marginHorizontal: 15, marginTop: 10, marginBottom: 300}}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={region}
              pinColor={'red'} // any color
              title={'title'}
              description={'description'}
            />
          </MapView>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 60,
            right: 0,
          }}>
          <Image source={whatsapp} style={{width: 90, height: 90}} />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: '#FBFBFB',
              borderRadius: 20,
              borderWidth: 1,
              paddingVertical: 10,
              // flex: Platform.OS == "android" ? 0.5 : 0.5,
            }}>
            <Calendar
              disableArrowLeft={true}
              hideArrows={true}
              markedDates={marked}
            />
            {/* <Calendar
              style={
                {
                  // height: 350,
                }
              }
              theme={{
                calendarBackground: 'blue',
              }}
              // Enable horizontal scrolling, default = false
              horizontal={true}
              // Enable paging on horizontal, default = false
              pagingEnabled={true}
              // Set custom calendarWidth.
              // calendarWidth={320}
            /> */}
          </View>
        </Modal>
        {isDisplayDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={mydate}
            mode={displaymode}
            is24Hour={true}
            display="default"
            onChange={changeSelectedDate}
          />
        )}
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginVertical: 5,
  },
  eye1: {position: 'absolute', right: 10, top: 20},
  plus: {position: 'absolute', right: 0, top: 30},
  map: {
    width: '100%',
    height: '50%',
  },
});
