import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { AuthContext } from '../context/AuthContext'


const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext)

  if(isLoading === true) {
    return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'}/>
    </View>  
    )
  }

  return (
    <NavigationContainer style={styles.root}>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppNav;