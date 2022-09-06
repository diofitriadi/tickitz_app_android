import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ToastAndroid, FlatList, RefreshControl} from 'react-native'
import { commonStyle } from '../../helper/commonStyle'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'


const UpcomingMovies = () => {
  const [loading, setLoading] = useState(false),
  [refetch, setRefetch] = useState(false)

  const navigation = useNavigation()

  const [dataMovies, setDataMovies] = useState({
    "data": {
        "message": "get all movies success",
        "status": 200,
        "totalRows": 0,
        "totalPage": 0,
        "data": []
    }
  })

  useEffect(() => {
    setLoading(true);
    axios.get('https://tickitz-backend-dio.herokuapp.com/api/v1/movies/?page=1&limit=5').then((res) => {
        setDataMovies(res.data)
    }).catch((err) => {
        console.log(err, 'error') //pake toast
        ToastAndroid.show('Cek Koneksi Jaringan', ToastAndroid.SHORT)
    }).finally(() => {
        setLoading(false);
    })
  }, [refetch])
  return(
    <>
      <View style={[commonStyle.flexRow, commonStyle.flexBetween, {alignItems: 'center'}]}>
        <Text style={{fontSize: 18, color: '#5F2EEA'}}>Upcoming Movies</Text>
        <Pressable onPress={()=> navigation.navigate('ViewAllMovies')}>
          <Text style={{color: '#5F2EEA'}}>View All</Text>
        </Pressable>
      </View>
      <View style={[commonStyle.flexRow]}>
        <TouchableOpacity>
          <View style={[commonStyle.flexCenter,{backgroundColor: '#5F2EEA', marginTop: 25, marginRight: 20,padding: 7, borderRadius: 5}]}>
              <Text style={[commonStyle.textWhite, {fontSize: 13}]}>September</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[commonStyle.flexCenter,{backgroundColor: '#5F2EEA', marginTop: 25, marginRight: 20,padding: 7, borderRadius: 5}]}>
              <Text style={[commonStyle.textWhite, {fontSize: 13}]}>October</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[commonStyle.flexCenter,{backgroundColor: '#5F2EEA', marginTop: 25, marginRight: 20,padding: 7, borderRadius: 5}]}>
              <Text style={[commonStyle.textWhite, {fontSize: 13}]}>November</Text>
          </View>
        </TouchableOpacity>
        </View>
        <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={loading}
      onRefresh={() => { setRefetch(!refetch) }} />}
      data={dataMovies.data}
      ItemSeparatorComponent={() => <View style={{ backgroundColor: '#333' }} />}
      renderItem={({ item, index }) => {
        return (
          <Pressable onPress={()=> navigation.navigate('MovieDetails', {
            cover: item.cover,
            title: item.title,
            categories: item.categories,
            release_date: moment(item.release_date).format('DD MMMM YYYY'),
            director: item.director,
            duration: item.duration,
            casts: item.casts,
            synopsis: item.synopsis,
          })}>
            <View style={[commonStyle.flexRow, {marginVertical: 30}]} >
              <View style={[commonStyle.flexCenter,{paddingTop: 15, paddingBottom: 20, width: 130, height:350, marginRight: 30, backgroundColor: '#fff', borderRadius: 5}]}>
                <Image source={{uri: `https://tickitz-backend-dio.herokuapp.com/uploads/${item.cover}`}} style={{
                  width: 100,
                  height: 150,
                  resizeMode: 'cover',
                  alignSelf: 'center'
                }}/>
                <Text style={[commonStyle.flexCenter,commonStyle.textBlack, {paddingTop: 10, textAlign: 'center', fontWeight: 'bold'}]}>{item.title}</Text>
                <Text style={[commonStyle.flexCenter,{flexWrap: 'wrap', textAlign: 'center', paddingVertical: 5}]}>{item.categories}</Text>
                <TouchableOpacity>
                  <View style={[commonStyle.flexCenter,{backgroundColor: '#5F2EEA', marginTop: 25, marginRight: 20,padding: 7, borderRadius: 5}]}>
                    <Text style={[commonStyle.textWhite,commonStyle.flexCenter , {paddingHorizontal: 5}]}>Detail</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        )
      }}/>
    </>
  )

}

export default UpcomingMovies;