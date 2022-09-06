import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import {View, Text, ScrollView, SafeAreaView, Image} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { commonStyle } from '../../helper/commonStyle'



const MovieDetails = ({route}) => {
  const { 
    cover,
    title,
    categories,
    release_date,
    director,
    duration,
    casts,
    synopsis, 
  } = route.params;
  const cinema = ["ebv.id", "cineOne21", "hiflix"]
  const location = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"]
  const date_playing = ["2022-09-04", "2022-09-05", "2022-09-06", "2022-09-07", "2022-09-08", "2022-09-09"]
  const booking_number = ["1", "2", "3", "4", "5"]
  return (
    <>
    <ScrollView>
        <View style={{padding: 35}}>
          <View style={[commonStyle.flexCenter,{borderWidth: .2, marginHorizontal: 60, borderRadius: 5}]}>
            <Image source={{uri: `https://tickitz-backend-dio.herokuapp.com/uploads/${cover}`}} 
              style={{
                margin: 20, 
                width: '80%', 
                height: 200,
                resizeMode: 'cover'
              }}/>
          </View>
          <View style={[commonStyle.flexCenter, commonStyle.flexBetween,{marginTop: 30}]}>
            <Text style={[commonStyle.textBlack,{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}]}>{title}</Text>
            <Text style={{marginTop: 10}}>{categories}</Text>
          </View>
          <View style={[commonStyle.flexRow, commonStyle.flexBetween, {marginTop: 30}]}>
            <View>
              <Text>Release Date :</Text>
              <Text>{release_date}</Text>
            </View>
            <View>
              <Text>Directed By</Text>
              <Text>{director}</Text>
            </View>
          </View>
          <View style={[commonStyle.flexRow, commonStyle.flexBetween, {marginTop: 15}]}>
            <View>
              <Text>Duration</Text>
              <Text>{duration}</Text>
            </View>
            <View>
              <Text style={{alignItems: 'flex-end'}}>Casts</Text>
              <Text>{casts.split(",").join("\n")}</Text>
            </View>
          </View>
          <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { marginTop: 5}]}>
            <Text style={{}}>Synopsis : </Text>
            <Text style={{textAlign: 'left', marginTop: 20, marginBottom: 50}}>{synopsis}</Text>
          </View> 
          <SelectDropdown
            defaultButtonText='Select Cinema'
            buttonTextStyle={{fontSize: 16}}
            buttonStyle={{color: 'red'}}
            selectedRowStyle={{color: 'red'}}
            data={cinema}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
          <SelectDropdown
            defaultButtonText='Select Location'
            buttonTextStyle={[commonStyle.flexCenter, {fontSize: 16}]}
            buttonStyle={[commonStyle.flexCenter,{}]}
            selectedRowStyle={[commonStyle.flexCenter, {}]}
            data={location}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
          <SelectDropdown
            defaultButtonText='Select Date Playing'
            buttonTextStyle={[commonStyle.flexCenter, {fontSize: 16}]}
            buttonStyle={[commonStyle.flexCenter,{}]}
            selectedRowStyle={[commonStyle.flexCenter, {}]}
            data={date_playing}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
          <SelectDropdown
            defaultButtonText='How many tickets ?'
            buttonTextStyle={[commonStyle.flexCenter, {fontSize: 16}]}
            buttonStyle={[commonStyle.flexCenter,{}]}
            selectedRowStyle={[commonStyle.flexCenter, {}]}
            data={booking_number}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
        </View>          
      </ScrollView>
      

    </>
  )
}

export default MovieDetails;