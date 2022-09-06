import React, {useContext} from 'react'
import { View, Image, TouchableOpacity, Text, Pressable } from 'react-native'
import BellIcon from 'react-native-vector-icons/AntDesign'
import { commonStyle } from '../../helper/commonStyle'
import { useNavigation } from '@react-navigation/native'
import Hamburger from 'react-native-vector-icons/Feather'
import { AuthContext } from '../context/AuthContext'


const Navbar = () => {
  const navigation = useNavigation()
  const {logout} = useContext(AuthContext)
  return (
    <View style={[commonStyle.flexBetween, commonStyle.flexRow,{
      backgroundColor: '#fff',
      paddingHorizontal: 30, 
      paddingVertical: 20,
      alignItems: 'center'
    }]}>
      <Hamburger name='menu' size={25}/>
      <TouchableOpacity onPress={()=> navigation.navigate('LandingPage')}>
        <Image source={require('../assets/icons/tickitzLogo.png')}/>
      </TouchableOpacity>
      <Pressable onPress={()=>{logout()}}>
        <Text style={[commonStyle.textWhite,{backgroundColor: '#5F2EEA', paddingVertical: 5 ,paddingHorizontal: 5, borderRadius: 10}]}>Logout</Text>
      </Pressable>
      
    </View>
  )
}

export default Navbar;