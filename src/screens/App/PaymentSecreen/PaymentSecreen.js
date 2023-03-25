import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ButtonComp from '../../../components/ButtonComp';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import paypalapi from '../../../components/paypalapi';
import WebView from 'react-native-webview';
import queryString from 'query-string';
const PaymentSecreen = () => {
  const [cardinfo, setcardinfo] = useState(null);
  const [paypalurl, setpaypalurl] = useState(null);
  const [accesstoken, setaccesstoken] = useState(null);
  const fetchdetail = cardDetail => {
    if (cardDetail.complete) {
      setcardinfo(cardDetail);
    } else {
      setcardinfo(null);
    }
  };
  const onUrlChange = webviewState => {
    console.log('webviewStatechanged', webviewState);
    if (webviewState.url.includes('https://example.com/cancel')) {
      clearpaypalurl();
      alert('closed webview');
      return;
    }
    if (webviewState.url.includes('https://example.com/return')) {
      const urlvalues = queryString.parseUrl(webviewState.url);
      console.log('urlvalues', urlvalues);
      const {token} = urlvalues.query;
      if (!!token) {
        paymentsuccess(token);
      }
    }
  };
  const onPressPayPal = async () => {
    try {
      const token = await paypalapi.generateToken();
      const res = await paypalapi.createorder(token);
      setaccesstoken(token);
      console.log('checkres', res);
      console.log('checktoken', token);
      if (!!res?.links) {
        const findurl = res.links.find(data => data?.rel == 'approve');

        setpaypalurl(findurl.href);
      }
    } catch (error) {
      console.log('errorcheck', error);
    }
  };
  const clearpaypalurl = () => {
    setpaypalurl(null);
    setaccesstoken(null);
  };
  const paymentsuccess = async id => {
    try {
      const res = await paypalapi.capturepayment(id, accesstoken);
      console.log('capturepayment', res);
      alert('payment successful');
      clearpaypalurl();
    } catch (error) {
      console.log('error raised in payment', error);
    }
  };
  console.log('first', paypalurl);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      /> */}
      <TouchableOpacity
        onPress={onPressPayPal}
        style={{
          backgroundColor: 'blue',
          width: '90%',
          height: 42,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          Done
        </Text>
      </TouchableOpacity>
      <Modal visible={!!paypalurl}>
        <View style={{flex: 1}}>
          <WebView
            source={{uri: paypalurl}}
            onNavigationStateChange={onUrlChange}
          />
        </View>
      </Modal>
    </View>
  );
};

export default PaymentSecreen;

const styles = StyleSheet.create({});
