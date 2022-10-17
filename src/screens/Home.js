import React,{useState,useEffect} from 'react';
import {View,Text,Image,Platform,PermissionsAndroid,NativeAlert,
  StyleSheet,
  Animated,
  ScrollView,
  Alert,
  Modal,
  SafeAreaView} from 'react-native'
  import { useNavigation } from '@react-navigation/native';
import { fetchNft } from '../api/magiceden';
import { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import Geolocation from 'react-native-geolocation-service';
import { DARK_MAP_STYLE } from '../../themes/colors';
import HandlePin from '../components/HandlePin';
import BottomTab from '../components/BottomTab';
import ModalCustom from '../components/ModalCustom';


const hardcodeAddress  = "1qxYvBL57HTcoPqsx37zd6mvX181sheN9yUULUTp8E9" //a hardcoded wallet for now
const Home = () => {

  useEffect(()=>{
    const nftWallet = async()=>{
        const wallet= await fetchNft(hardcodeAddress);        
        setNftData(wallet);
        
    }
    nftWallet();
    // console.log('mounted',nftData[0])
   getLocation();
    
    
    return()=>{
        // console.log('unmounted',nftData);
        
      }
},[])



   const [nftData,setNftData] = useState([]);
const navigation = useNavigation()
   const [lat, setLat] = useState(24.892);
  const [long, setLong] = useState(78.01);
  const [modalVisible,setModalVisible] = useState(false);


   const getLocation = async () => {
    
    if (Platform.OS == 'android') {
      try {

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
      
          if (hasPermission) {
         
          }

        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           
           Geolocation.getCurrentPosition(
            (position) => {
            
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
            },
            (error) => {
              NativeAlert.alert(
                'Permission required',
                'Please enable geolocation permission.'
              );
            },
            { enableHighAccuracy: false, timeout: 20000 }
          );
        } else { 
            console.log('no permission')
        }
      } catch (err) {
        console.log('err',err);
      }
    } else {
      await Geolocation.requestAuthorization(
        (authorizationLevel = 'whenInUse')
      );
      await Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });

      await Geolocation.getCurrentPosition(
        (position) => {
          console.log('position :', position);
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        (error) => {
          NativeAlert.alert(
            'Permission required',
            'Please enable geolocation permission.'
          );
        },
        { enableHighAccuracy: false, timeout: 20000 }
      );
    }
  };

  const INITIAL_REGION = {
    latitude: lat,
    longitude: long,
    latitudeDelta:  16.22,
    longitudeDelta: 8.5,
  };

 

    ///rendering
    return (
        <SafeAreaView style = {{flex:1}}>
            {
                
                    <MapView
          style={styles.mapStyle}
          initialRegion={INITIAL_REGION}
          customMapStyle={DARK_MAP_STYLE}
          provider = { PROVIDER_GOOGLE }
          clusterColor={'#999999'}
          animationEnabled
          showsUserLocation={true}
          onRegionChange = {region=>{
            // console.log('region changed',region)
          }}
          
        >
            {/* WONT WORK CZ DONT HAVE COORDINATES FOR NFTS
            
            {(nftData.length>0) ?  
              nftData.map((item,index)=>{
                console.log('map',item);
              }) : null
            } */}
            {/* 1st Task */}
          <Marker
            coordinate={{latitude: 24.78825,
            longitude: 78}}
            title={"Task1"}
            description={"Reward $5"}
            onPress={()=>navigation.navigate("task",{title:"Task",description:"Go Plant a tree"})}
         >
          
           <HandlePin  imge = {nftData.length>1 ? nftData[0] : null}/>
           </Marker>

           {/* 2nd task */}
           <Marker
            coordinate={{latitude: 23.78825,
            longitude: 77}}
            title={"Task2"}
            description={"Reward $5"}
            onPress={()=>navigation.navigate("task",{title:"Task2",description:"Go water a plant you degen"})}
         >
          
           <HandlePin imge = {nftData.length>1 ? nftData[1] : null} />
           </Marker>
           
           {/* 3rd Task */}
           <Marker
            coordinate={{latitude: 20.78825,
            longitude: 77}}
            title={"Task3"}
            description={"Reward $5"}
            onPress={()=>
              // navigation.navigate("task",{title:"Task3",description:"Go pick up dump you degen"})
            setModalVisible(!modalVisible)
            // console.log('dikha?',modalVisible)
            }
         >
          
           <HandlePin imge = {nftData.length>1 ? nftData[2] : null} />
           </Marker>
        
            
        </MapView>
              
            }
             <Modal
          animationType="slide"
          
          transparent={true}
          visible={modalVisible}
          presentationStyle = "pageSheet"
          
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
         >
          <View style={styles.modalSheet}>
            <ModalCustom item = {nftData[2]}/>
          </View>

         </Modal>
         
          <View style={{ position: 'absolute', bottom: 2,right:1,left:1 }}>
            <BottomTab />
          </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  mapStyle:{
    flex: 1, width: '100%', height: '100%' 
  },
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
export default Home;