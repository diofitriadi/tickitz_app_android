import React, { useState} from 'react'
import { ScrollView, Text, TextInput, View, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyle } from '../../helper/commonStyle';


const Login = () => {
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
          <View style={{paddingHorizontal: 20}}>
            <Pressable  onPress={()=> navigation.navigate('LandingPage')}>
              <Image source={require('../assets/icons/tickitzLogo.png')} style={styles.mainLogo}/>
            </Pressable>
            <Text style={[commonStyle.textBlack,{fontSize: 17, marginBottom: 10, fontWeight: 'bold'}]}>FORGOT PASSWORD</Text>
            <Text style={{fontSize: 13}}>We send you the link </Text>
          </View>
            <View style={[styles.input ,{marginTop: 25}]}>
                <Text style={[commonStyle.textBlack, {marginBottom: 10}]}>Email</Text>
                <View style={[commonStyle.flexRow, { backgroundColor: '#f0f0f0', borderRadius: 5}]}>
                    <TextInput placeholder="Write your email" style={{ padding: 10, flex: 1, paddingLeft: 15 }} autoCapitalize='none' keyboardType='email-address' />
                </View>
            </View>
            <TouchableOpacity>
                <View style={[commonStyle.flexCenter,{backgroundColor: '#5F2EEA', marginHorizontal: 20, borderRadius: 5}]}>
                    <Text style={[commonStyle.textWhite, styles.buttonAuth]}>Send</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  mainLogo: {
    marginTop: 30,
    marginBottom: 40, 
    width: '28%', 
    height: 25, 
    resizeMode: 'contain'
  },
  buttonAuth: {
    padding: 13, 
    fontSize: 12
  },
    input : {
      backgroundColor: '#fff', 
      paddingHorizontal: 18,
      marginBottom: 10 
  }
})

export default Login;