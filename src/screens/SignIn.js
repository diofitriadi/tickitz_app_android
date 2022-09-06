import React, { useState, useContext} from 'react'
import { ScrollView, Text, TextInput, View, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyle } from '../../helper/commonStyle';
import { AuthContext } from '../context/AuthContext';


const Login = ({navigation}) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const { login } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
          <View style={{paddingHorizontal: 20}}>
            <Pressable onPress={()=> navigation.navigate('LandingPage')}>
              <Image source={require('../assets/icons/tickitzLogo.png')} style={styles.mainLogo}/>  
            </Pressable>
            <Text style={[commonStyle.textBlack,{fontSize: 17, marginBottom: 10, fontWeight: 'bold'}]}>SIGN IN</Text>
            <Text style={{fontSize: 13}}>Sign in with your data that you entered during your registration</Text>
          </View>
            <View style={[styles.input ,{marginTop: 25}]}>
                <Text style={[commonStyle.textBlack, {marginBottom: 10}]}>Email</Text>
                <View style={[commonStyle.flexRow, { backgroundColor: '#f0f0f0', borderRadius: 5}]}>
                    <TextInput placeholder="Write your email" style={{ padding: 10, flex: 1, paddingLeft: 15 }} autoCapitalize='none' keyboardType='email-address' value={email}
                    onChangeText={text => setEmail(text)}/>
                </View>
            </View>
            <View style={[styles.input]}>
                <Text style={[commonStyle.textBlack, {marginBottom: 10}]}>Password</Text>
                <View style={[commonStyle.flexRow, { backgroundColor: '#f0f0f0' ,borderRadius: 5}]}>
                    <TextInput placeholder="Write your password" style={{ padding: 10, flex: 1, paddingLeft: 15 }} autoCapitalize='none' secureTextEntry={showPassword ? false : true} value={password}
                    onChangeText={text => setPassword(text)}/>
                    <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 10 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                </View>
            </View>
            <Pressable onPress={()=> navigation.navigate('ForgotPassword')}>
                <View style={[{ backgroundColor: '#fff', paddingHorizontal: 20}]}>
                    <Text style={[commonStyle.textBlack, {marginVertical: 4, fontSize: 13}]}>Forgot Password?</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[{ backgroundColor: '#fff', paddingHorizontal: 20}]}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                        <Text style={[commonStyle.textBlack, {marginBottom: 22, fontSize: 13}]}>Sign Up</Text>    
                    </TouchableOpacity>
                </View>
            </Pressable>
            <TouchableOpacity onPress={()=> {login(email, password)}}>
                <View style={[commonStyle.flexCenter,{backgroundColor: '#5F2EEA', marginHorizontal: 20, borderRadius: 5}]}>
                    <Text style={[commonStyle.textWhite, styles.buttonAuth]}>Login</Text>
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