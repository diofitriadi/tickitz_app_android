import React, { useEffect } from 'react'
import { SafeAreaView ,ScrollView, View, Text, Image, StyleSheet, Pressable, TouchableOpacity, TextInput, Alert } from "react-native";
import { commonStyle } from '../../helper/commonStyle';
import  Navbar  from '../components/Navbar';
import NowShowing from '../components/NowShowing';
import UpcomingMovies from '../components/UpcomingMovies';
// import messaging from '@react-native-firebase/messaging';


const LandingPage = () => {
  
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <>
    <SafeAreaView>
      <Navbar/>
      <ScrollView>
      {/* Landing Page */}
        <View style={{backgroundColor: '#E5E5E5', padding: 30}}>
          <Text style={{fontSize: 16, textAlign: 'center'}}>Nearest Cinema, Newest Movie</Text>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: '#5F2EEA',textAlign: 'center'}}>Find out now!</Text>
        </View>
        <View style={{backgroundColor: '#E5E5E5', height: 550, alignItems: 'center'}}>
          <Image source={require('../assets/img/landingImage.png')} />
        </View>
        {/* Now Showing */}
        <NowShowing/>
        {/* Upcoming Movies */}
        <View style={{padding: 35}}>
          <UpcomingMovies/>
          {/* Subscribe Button */}
          <View style={[commonStyle.flexCenter,{marginBottom: 60, elevation: 1, padding: 30}]}>
            <Text style={{fontSize: 15, marginTop: 20, marginBottom: 2}}>Be the vanguard of the</Text>
            <Text style={{fontSize: 24,fontWeight: '500', color: '#5F2EEA', marginBottom: 30}}>Moviegoers</Text>
            <TextInput placeholder="Write your email" style={{ paddingVertical: 6, paddingHorizontal: 60, marginTop:10, marginBottom: 15, flex: 1, borderWidth: .2, borderRadius: 2 }} autoCapitalize='none' keyboardType='email-address' />
            <Pressable>
              <Text style={[commonStyle.flexCenter,{color: 'white', fontSize: 12, backgroundColor: '#5F2EEA',borderWidth: 1, textAlign: 'center',paddingHorizontal: 82, paddingVertical: 8, borderRadius: 7}]}>
                Join Now
              </Text>
            </Pressable>
            <Text style={{marginTop: 25, fontSize: 14,textAlign: 'center', lineHeight: 25}}>By joining you as a Tickitz member, we will always send you the latest updates via email .</Text>
          </View>
        </View>
    </ScrollView>      
    </SafeAreaView>
    </>
  );
}



export default LandingPage