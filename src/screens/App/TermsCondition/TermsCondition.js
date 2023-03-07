import React, {useEffect, useState, useRef} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Headers1 from '../../../components/Headers1';
import colors from '../../../theme/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import {connect} from 'react-redux';
import fonts from '../../../theme/fonts';
import {useNavigation} from '@react-navigation/native';
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
const TermsCondition = ({selectedLanguages, translation}) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Headers1 title="Terms & Conditions" />

      <View style={{flex: 1, paddingHorizontal: 15, paddingRight: 16}}>
        <View style={{}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ec3432'}}>
            Heading 1
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 26,
              fontFamily: fonts.PoppinsRegular,
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 15, paddingRight: 16}}>
        <View style={{marginTop: '8%'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ec3432'}}>
            Heading 2
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '3%',
          }}>
          <View style={{width: '5%'}}>
            <Octicons
              name="primitive-dot"
              color={colors.yellow}
              size={20}
              style={{paddingTop: 5}}
            />
          </View>
          <View style={{width: '95%'}}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 26,
                fontFamily: fonts.PoppinsRegular,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '3%',
          }}>
          <View style={{width: '5%'}}>
            <Octicons
              name="primitive-dot"
              color={colors.yellow}
              size={20}
              style={{paddingTop: 5}}
            />
          </View>
          <View style={{width: '95%'}}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 26,
                fontFamily: fonts.PoppinsRegular,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: '110%',
    width: '110%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  inputContainer: {
    justifyContent: 'center',
  },
  input: {
    height: 50,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  primaryBtn: {
    width: '100%',
    backgroundColor: colors.primary,
    marginTop: 50,
    borderRadius: 10,
    height: DEVICE_HEIGHT > 600 ? 40 : 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  primaryText: {
    color: colors.white,
    fontSize: DEVICE_HEIGHT > 600 ? 16 : 12,
  },
});

const mapStateToProps = state => {
  const {user} = state.auth;
  return {user};
};
export default connect(mapStateToProps, {})(TermsCondition);
