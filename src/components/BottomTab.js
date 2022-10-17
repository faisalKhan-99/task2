import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderTopWidth: 0,
        backgroundColor: '#000',
        height: 70,
        width: '75%',
        opacity: 0.8,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <TouchableOpacity
        // onPress={() => {
        //   navigation.replace('Map');
        // }}
        style={styles.wrapper}
      >
        <Ionicons name={'ios-home'} color={'#ffffff'} size={25} />
        <Text style={{ color: '#3399ff' }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => {
        //   navigation.replace('Home');
        // }}
        style={styles.wrapper}
      >
        <MaterialIcons
          name={'attach-money'}
          color={'#ffffff'}
          size={25}
        />
        <Text style={{ color: '#3399ff' }}>Rewards</Text>
      </TouchableOpacity>

    

    
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
  },
});
