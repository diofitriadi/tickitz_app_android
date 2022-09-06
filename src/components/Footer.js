import React from 'react';
import {View, Image, Text} from 'react-native';
import NavIcon from 'react-native-vector-icons/MaterialIcons';
import {commonStyle} from '../../helper/commonStyle';
import FooterIcon from 'react-native-vector-icons/AntDesign'

const Footer = () => {
  return (
    <>
      <View>
        <Image
          source={require('../assets/icons/tickitzLogo2.png')}
          style={{width: '35%', height: 30, resizeMode: 'cover'}}></Image>
        <Text style={{paddingVertical: 20, paddingRight: 30, lineHeight: 20}}>
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={[commonStyle.textBlack, {fontWeight: 'bold'}]}>
          Explore
        </Text>
        <View style={[commonStyle.flexRow, {marginVertical: 15}]}>
          <Text style={{marginRight: 40}}>Home</Text>
          <Text>Movies</Text>
        </View>
      </View>
      <View style={{marginVertical: 15}}>
        <Text style={[commonStyle.textBlack, {fontWeight: 'bold'}]}>
          Our Sponsor
        </Text>
        <View
          style={[
            commonStyle.flexRow,
            commonStyle.flexCenter,
            {marginVertical: 15},
          ]}>
          <Image
            source={require('../assets/icons/ebv.png')}
            style={{marginRight: 15}}
          />
          <Image
            source={require('../assets/icons/cineOne.png')}
            style={{marginRight: 15}}
          />
          <Image source={require('../assets/icons/hiflix.png')} />
        </View>
      </View>
      <View style={{marginVertical: 15}}>
        <Text style={[commonStyle.textBlack, {fontWeight: 'bold'}]}>
          Follow Us
        </Text>
        <View style={[commonStyle.flexRow, {marginVertical: 15}]}>
          <NavIcon name="facebook" size={25} style={{marginRight: 15}} />
          <FooterIcon name="instagram" size={25} style={{marginRight: 15}} />
          <FooterIcon name="twitter" size={25} style={{marginRight: 15}} />
          <FooterIcon name="youtube" size={25} />
        </View>
      </View>
      <Text>© 2020 Tickitz. All Rights Reserved.</Text>
    </>
  );
};

export default Footer;
