import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  const scaling = useRef(new Animated.Value(0)).current 
  const navigation = useNavigation()
const timer = () =>{
    setTimeout(()=>{
       navigation.replace('home')
    },5000)
}
  useEffect(() => {
  timer();
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
      }
    ).start();
    
  }, [fadeAnim])
 

  return (
    <Animated.View                 
      style={{
        ...props.style,
        opacity: fadeAnim, 
                
      }}
    >
      {props.children}
    </Animated.View>
  );
}


export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'black'}}>
      <FadeInView style={{width:'100%', height: '20%', backgroundColor: 'black'}}>
        <Text style={{fontSize: 31, textAlign: 'center', margin: 10,color:'white',
    transform:[]
    }}>AtlantisDAO Task</Text>
      </FadeInView>
    </View>
  )
}