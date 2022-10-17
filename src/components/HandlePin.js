import React from 'react'
import{View,Text,Image} from 'react-native';

const Triangle = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 5,
          borderRightWidth: 5,
          borderBottomWidth: 8,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#fff',
          transform: [{ rotate: '180deg' }],
        }}
      />
    );
  };


const HandlePin = (imge) => {
    if(imge.imge!=null){
      return (
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: imge.imge.image}}
            style={{
              height: 40,
              width: 40,
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
         
          <Triangle />
        </View>
      );
    }
    else return null;
    
   }
   export default HandlePin;