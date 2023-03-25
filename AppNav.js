/** @format */

import React, {useEffect, useState} from 'react';
import {View, PermissionsAndroid, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
//screens
import {connect} from 'react-redux';
import Splash from './src/screens/Auth/Splash';
import TermsCondition from './src/screens/App/TermsCondition';
import DrawerContent from './src/navigation/DrawerContent';
import SignupCopy from './src/screens/Auth/SignupCopy';
import Phoneverify from './src/screens/Auth/Phoneverify';
import Trackparcel from './src/screens/App/Trackparcel/Trackparcel';
import ReviewsRating from './src/screens/App/ReviewsRating';
import Paypal from './src/screens/App/Paypal';
import Rates from './src/screens/App/Rates';
import Help from './src/screens/App/Help';
import GiftVoucher from './src/screens/App/GiftVoucher/GiftVoucher';
import Insuarance from './src/screens/App/Insuarance';
import {LogBox} from 'react-native';
import ResetPassword from './src/screens/Auth/ResetPassword';
import NavigationSecreen from './src/screens/App/NavigationSecreen';
import Works from './src/screens/App/Works/Works';
import Contact from './src/screens/App/Contact';
import Promo from './src/screens/App/Promo';
import Refferals from './src/screens/App/Refferals/Refferals';
import Wallet from './src/screens/App/Wallet';
import AddWallet from './src/screens/App/AddWallet';
import Login from './src/screens/Auth/Login';
import CardDetail from './src/screens/App/CardDetail/CardDetail';
import PinLocation from './src/screens/App/PinLocation';
import ParcelDetail from './src/screens/App/ParcelDetail/ParcelDetail';
import SearchDriver from './src/screens/App/SearchDriver';
import AddParcel from './src/screens/App/AddParcel';
import SelectPayment from './src/screens/App/SelectPayment';
import DriverCompliments from './src/screens/App/DriverCompliments/DriverCompliments';
import Stats from './src/screens/App/Stats';
import MyProfile from './src/screens/App/MyProfile';
import Activities from './src/screens/App/Activities';
import Parcel from './src/screens/App/Parcel/Parcel';
import Home from './src/screens/App/Home';
import SaveLocation from './src/screens/App/SaveLocation/SaveLocation';
import ShowActivities from './src/screens/App/ShowActivities';
import ThankYou from './src/screens/App/ThankYou/ThankYou';
import Vouchers from './src/screens/App/Vouchers/Vouchers';
import LostAccount from './src/screens/Auth/LostAccount';
import DateTime from './src/screens/App/DateTime';
import RideDetail from './src/screens/App/RideDetail';
import PaymentSecreen from './src/screens/App/PaymentSecreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export function DrawerNav({isLoggedIn}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName={!isLoggedIn ? 'Splash' : 'Splash'}>
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="SignupCopy" component={SignupCopy} />
        <Drawer.Screen name="PinLocation" component={PinLocation} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="LostAccount" component={LostAccount} />
        <Drawer.Screen name="Stats" component={Stats} />
        <Drawer.Screen name="GiftVoucher" component={GiftVoucher} />
        <Drawer.Screen name="MyProfile" component={MyProfile} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Promo" component={Promo} />
        <Drawer.Screen name="AddWallet" component={AddWallet} />
        <Drawer.Screen name="RideDetail" component={RideDetail} />
        <Drawer.Screen name="Phoneverify" component={Phoneverify} />
        <Drawer.Screen name="ResetPassword" component={ResetPassword} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Rates" component={Rates} />
        <Drawer.Screen name="Refferals" component={Refferals} />
        <Drawer.Screen name="Activities" component={Activities} />
        <Drawer.Screen name="Parcel" component={Parcel} />
        <Drawer.Screen name="Paypal" component={Paypal} />
        <Drawer.Screen name="Insuarance" component={Insuarance} />
        <Drawer.Screen name="CardDetail" component={CardDetail} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SaveLocation" component={SaveLocation} />
        <Drawer.Screen name="NavigationSecreen" component={NavigationSecreen} />
        <Drawer.Screen name="ParcelDetail" component={ParcelDetail} />
        <Drawer.Screen name="AddParcel" component={AddParcel} />
        <Drawer.Screen name="SelectPayment" component={SelectPayment} />
        <Drawer.Screen name="DriverCompliments" component={DriverCompliments} />
        <Drawer.Screen name="SearchDriver" component={SearchDriver} />
        <Drawer.Screen name="ReviewsRating" component={ReviewsRating} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="TermsCondition" component={TermsCondition} />
        <Drawer.Screen name="Works" component={Works} />
        <Drawer.Screen name="Trackparcel" component={Trackparcel} />
        <Drawer.Screen name="ShowActivities" component={ShowActivities} />
        <Drawer.Screen name="ThankYou" component={ThankYou} />
        <Drawer.Screen name="Vouchers" component={Vouchers} />
        <Drawer.Screen name="DateTime" component={DateTime} />
        <Drawer.Screen name="PaymentSecreen" component={PaymentSecreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

LogBox.ignoreAllLogs();
function AppNav({route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
        headerMode="float"
        animation="fade">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false, animationEnabled: true}}
        />

        <Stack.Screen
          name="SignupCopy"
          component={SignupCopy}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="RideDetail"
          component={RideDetail}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Vouchers"
          component={Vouchers}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="SaveLocation"
          component={SaveLocation}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="PaymentSecreen"
          component={PaymentSecreen}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="DateTime"
          component={DateTime}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Activities"
          component={Activities}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="PinLocation"
          component={PinLocation}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="ThankYou"
          component={ThankYou}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="LostAccount"
          component={LostAccount}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="ShowActivities"
          component={ShowActivities}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="GiftVoucher"
          component={GiftVoucher}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Promo"
          component={Promo}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="AddWallet"
          component={AddWallet}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Phoneverify"
          component={Phoneverify}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Parcel"
          component={Parcel}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Rates"
          component={Rates}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Refferals"
          component={Refferals}
          options={{headerShown: false, animationEnabled: true}}
        />

        <Stack.Screen
          name="Paypal"
          component={Paypal}
          options={{headerShown: false, animationEnabled: true}}
        />

        <Stack.Screen
          name="Insuarance"
          component={Insuarance}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="CardDetail"
          component={CardDetail}
          options={{headerShown: false, animationEnabled: true}}
        />

        <Stack.Screen
          name="NavigationSecreen"
          component={NavigationSecreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ParcelDetail"
          component={ParcelDetail}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="AddParcel"
          component={AddParcel}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="SelectPayment"
          component={SelectPayment}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="DriverCompliments"
          component={DriverCompliments}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="SearchDriver"
          component={SearchDriver}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="ReviewsRating"
          component={ReviewsRating}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{headerShown: false, animationEnabled: true}}
        />
        <Stack.Screen
          name="TermsCondition"
          component={TermsCondition}
          options={{headerShown: false, animationEnabled: true}}
        />

        <Stack.Screen
          name="Works"
          component={Works}
          options={{headerShown: false, animationEnabled: true}}
        />

        <Stack.Screen
          name="Trackparcel"
          component={Trackparcel}
          options={{headerShown: false, animationEnabled: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => {
  const {isLoggedIn} = state.auth;
  return {
    isLoggedIn,
  };
};
export default connect(mapStateToProps)(AppNav);
