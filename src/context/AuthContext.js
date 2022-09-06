import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = (email, password) => {
    setIsLoading(true)
    axios.post(`https://tickitz-backend-dio.herokuapp.com/api/v1/auth/login`, {
      email,
      password 
    }).then(res => {
      let userInfo = res.data
      setUserToken(userInfo.token)
      AsyncStorage.setItem('userToken', res.data.token)
      alert('Login sukses')
      setIsLoading(false)
    }).catch(e => {
      setIsLoading(false)
      alert('Username atau Password Salah')
    })
    // setUserToken('423423452')
    // AsyncStorage.setItem('userToken', '423423452')
    // setIsLoading(false)
  }

  const logout = () => {
    setIsLoading(true)
    setUserToken(null)
    AsyncStorage.removeItem('userToken')
    setIsLoading(false)
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true)
      let userToken = await AsyncStorage.getItem('userToken')
      console.log(userToken)
      setUserToken(userToken)
      setIsLoading(false)
    } catch(e) {
      alert(`error ${e}`)
    }
  }

  useEffect(()=> {
    isLoggedIn();
  }, [])

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  )
}