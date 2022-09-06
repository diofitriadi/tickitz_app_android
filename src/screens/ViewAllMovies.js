import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, SafeAreaView, TextInput, Image, FlatList, RefreshControl, Pressable} from 'react-native'
import Navbar from '../components/Navbar'
import { useNavigation } from '@react-navigation/native'
import { commonStyle } from '../../helper/commonStyle'
import moment from 'moment'


const ViewAllMovies = () => {
  const [loading, setLoading] = useState(false),
  [refetch, setRefetch] = useState(false)

  const navigation = useNavigation()

  const [dataMovies, setDataMovies] = useState({
        "message": "get all movies success",
        "status": 200,
        "totalRow": 0,
        "totalPage": 0,
        "data": []
  })

  const [query, setQuery] = useState ({
    title: "",
    sortBy: "",
    orderBy: "",
})

  useEffect(() => {
    const {title} = query
    setLoading(true);
    axios.get(`https://tickitz-backend-dio.herokuapp.com/api/v1/movies/${title ? `?title=${title}` : ''}`).then((res) => {
        setDataMovies(res.data)
    }).catch((err) => {
        console.log(err, 'error') //pake toast
        ToastAndroid.show('Cek Koneksi Jaringan', ToastAndroid.SHORT)
    }).finally(() => {
        setLoading(false);
    })
  }, [refetch, query])
  
  return(
    <>
    <View style={{backgroundColor: '#D6D8E7', padding: 35}}>
    <FlatList
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={loading}
        onRefresh={() => { setRefetch(!refetch) }} />
      }
      numColumns = {3}
      // extraData = {state data}
      ListHeaderComponent={() => (
        <>
          <View style={{}}>
          <TextInput style={[commonStyle.textWhite, {backgroundColor: '#fff', borderRadius: 5, marginBottom: 30}]} placeholder="  search movies" 
            onChangeText={(e) => {
              setRefetch(!refetch) 
              setQuery(prevData => ({
              ...prevData,
              title: e.target.value
              }))
            }}></TextInput>
          </View>
        </>
      )
      }
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
            casts: item.casts.split(',').join('\n'),
            synopsis: item.synopsis,
        })}>
            <View style={{marginVertical: 20}} >
              <View style={[commonStyle.flexCenter,{paddingTop: 15, paddingBottom: 20, width: 130, height:300, marginRight: 30, backgroundColor: '#fff', borderRadius: 5}]}>
                <Image source={{uri: `https://tickitz-backend-dio.herokuapp.com/uploads/${item.cover}`}} style={{
                  width: 100,
                  height: 150,
                  resizeMode: 'cover',
                  alignSelf: 'center'
                }}/>
                <Text style={[commonStyle.flexCenter, commonStyle.textBlack, {fontWeight: 'bold', paddingTop: 10, textAlign: 'center'}]}>{item.title}</Text>
                <Text style={[commonStyle.flexCenter, {paddingTop: 10, textAlign: 'center'}]}>{item.categories}</Text>
              </View>
            </View>
          </Pressable>
        )
      }}/>
    </View>
    </>
  )

}

export default ViewAllMovies;