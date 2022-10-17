import React from 'react'
import{View,Text,Modal,StyleSheet} from 'react-native'

const ModalCustom = (nftData) =>{ 
    console.log('here?',nftData.item.collectionName)
    if(nftData!=undefined){
        return(
            <View style={{alignContent:'center',alignSelf:'flex-start',paddingHorizontal:20}}>
            <Text style={{fontSize:20,color:'black'}}>
            Collection Name: {nftData.item.collectionName}
            </Text>
            <Text style={{fontSize:20,color:'black'}}>
           Listed Status : {nftData.item.listStatus}
            </Text>
            </View>
           
    
        )
    }
    else return null;
       
  
    
}
const styles = StyleSheet.create({
    modalSheet : {
        position:'absolute',
        borderRadius:60,
    //justifyContent: "center",
    alignSelf: "center",
    backgroundColor:"white",
    //marginTop: 22,
    bottom:0,
    height:'30%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
    }
})

export default ModalCustom;