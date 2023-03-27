import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/routers';
import {logo2} from '../../../assets';
import colors from '../../../theme/colors';
const Splash = ({navigation, isLoggedIn, user}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Refferals'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Image
        source={logo2}
        resizeMode="contain"
        style={{
          width: '60%',
          // height: '100%',
        }}
      />
    </View>
  );
};
const mapStateToProps = state => {
  const {isLoggedIn, user} = state.auth;
  return {isLoggedIn, user};
};
export default connect(mapStateToProps, {})(Splash);
