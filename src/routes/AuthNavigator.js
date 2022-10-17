import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import Task from '../screens/Task';
import FadeInView from '../screens/SplashScreen'
import { CardStyleInterpolators } from '@react-navigation/stack';

// export const DrawerNavigation = () =>{
//     const Drawer = createDrawerNavigator();
//     return(
//         <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
       
//       </Drawer.Navigator>
//     )
   
// }

const AuthNavigator = () =>{
    const stack  = createStackNavigator();

    return(
        <stack.Navigator screenOptions={{ headerShown: false }}>
              <stack.Screen name="splash" component={FadeInView} />
        <stack.Screen name="home" component={Home} />
     
        <stack.Screen name = "task" component={Task}  
        options={{
    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
  }}/>
         </stack.Navigator>
    )
}

export default AuthNavigator;