import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Task = (props) =>{
    
const description  =props.route.params.description 
    return(
        <View style={{backgroundColor:'black',flex:1}}>
            <Text style={styles.heading}>Task Page</Text>
            <View style={{justifyContent:'flex-start'}}>
                <Text style={styles.text}>
            {description}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    heading:{
        color:'white',justifyContent:'center',
        fontSize:20,margin:10,alignSelf:'center',
    },
text:{
    color:'white'
}
})
export default Task;