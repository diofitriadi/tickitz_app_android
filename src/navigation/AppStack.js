import React from 'react'
import LandingPage from "../screens/LandingPage";
import MovieDetails from "../screens/MovieDetails";
import ViewAllMovies from "../screens/ViewAllMovies";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}  >
      <Stack.Screen name="LandingPage" component={LandingPage}/>
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown: true, title: "Movie Details"}}/>
      <Stack.Screen name="ViewAllMovies" component={ViewAllMovies}  options={{headerShown: true, title: "View All Movies"}}/>
    </Stack.Navigator>
  )
}

export default AppStack;


