import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {commonStyle} from '../../helper/commonStyle';
const Register = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{paddingHorizontal: 20}}>
        <Pressable onPress={()=> navigation.navigate('LandingPage')}>
          <Image
          source={require('../assets/icons/tickitzLogo.png')}
          style={styles.mainLogo}
        />
        </Pressable>
        <Text
          style={[
            commonStyle.textBlack,
            {fontSize: 17, marginBottom: 10, fontWeight: 'bold'},
          ]}>
          SIGN UP
        </Text>
        <Text style={{fontSize: 13}}>Fill your additional details</Text>
      </View>
      <View style={[styles.input, {marginTop: 25}]}>
        <Text style={[commonStyle.textBlack, {marginBottom: 10, backgroundColor: '#fff'}]}>
          First Name
        </Text>
        <View
          style={[
            commonStyle.flexRow,
            {backgroundColor: '#f0f0f0', borderRadius: 5},
          ]}>
          <TextInput
            placeholder="Write your first name"
            style={{padding: 10, flex: 1, paddingLeft: 15}}
            autoCapitalize="none"
          />
        </View>
      </View>
      <View style={[styles.input]}>
        <Text style={[commonStyle.textBlack, {marginBottom: 10}]}>
          Last Name
        </Text>
        <View
          style={[
            commonStyle.flexRow,
            {backgroundColor: '#f0f0f0', borderRadius: 5},
          ]}>
          <TextInput
            placeholder="Write your last name"
            style={{padding: 10, flex: 1, paddingLeft: 15}}
            autoCapitalize="none"
            secureTextEntry={showPassword ? false : true}
          />
        </View>
      </View>
      <View style={[styles.input]}>
        <Text style={[commonStyle.textBlack, {marginBottom: 10}]}>
          Phone Number
        </Text>
        <View
          style={[
            commonStyle.flexRow,
            {backgroundColor: '#f0f0f0', borderRadius: 5},
          ]}>
          <TextInput
            placeholder="Write your phone number"
            style={{padding: 10, flex: 1, paddingLeft: 15}}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={[styles.input]}>
        <Text style={[commonStyle.textBlack, {marginBottom: 10}]}>Email</Text>
        <View
          style={[
            commonStyle.flexRow,
            {backgroundColor: '#f0f0f0', borderRadius: 5},
          ]}>
          <TextInput
            placeholder="Write your email"
            style={{padding: 10, flex: 1, paddingLeft: 15}}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={[styles.input]}>
        <Text style={[commonStyle.textBlack, {marginBottom: 10}]}>
          Password
        </Text>
        <View
          style={[
            commonStyle.flexRow,
            {backgroundColor: '#f0f0f0', borderRadius: 5},
          ]}>
          <TextInput
            placeholder="Write your password"
            style={{padding: 10, flex: 1, paddingLeft: 15}}
            autoCapitalize="none"
            secureTextEntry={showPassword ? false : true}
          />
          <Text
            onPress={() => setShowPassword(!showPassword)}
            style={{alignSelf: 'center', padding: 10}}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </View>
      </View>
      <Pressable onPress={()=> navigation.navigate('SignIn')}>
        <View style={[{backgroundColor: '#fff', paddingHorizontal: 20}]}>
          <Text style={[commonStyle.textBlack, {fontSize: 13}]}>Have an account ? Login Now</Text>
        </View>
      </Pressable>
      <TouchableOpacity>
        <View
          style={[
            commonStyle.flexCenter,
            {
              backgroundColor: '#5F2EEA',
              marginHorizontal: 20,
              marginVertical: 20,
              borderRadius: 5,
            },
          ]}>
          <Text style={[commonStyle.textWhite, styles.buttonAuth]}>
            Sign Up
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    marginTop: 30,
    marginBottom: 40,
    width: '28%',
    height: 25,
    resizeMode: 'contain',
  },
  buttonAuth: {
    padding: 13,
    fontSize: 12,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    marginBottom: 10,
  },
});

export default Register;
