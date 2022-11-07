import React, { useCallback, useContext, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {  Container, Input } from "native-base"; 
import { useFocusEffect } from "@react-navigation/native";
import moment from 'moment';
 
// Color
import Colors from "../../../Shared/Color";

// Fething Data
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../../../assets/common/baseUrl";


import AuthGlobal from "../../../Context/store/AuthGlobal";
import {logoutUser } from "../../../Context/actions/Auth.actions"


// Shared
import FormContainerProfile from "../../../Shared/Form/FormContainerProfile";
// import InputProfile from "../../../Shared/Form/InputProfile";

// Dimensions
const windowWidth = Dimensions.get("window").width;

function Health(props) {
  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState()

  useFocusEffect(
    useCallback(() => {
    if (
        context.stateUser.isAuthenticated === false || 
        context.stateUser.isAuthenticated === null
    ) {
        props.navigation.navigate("User")
    }

    AsyncStorage.getItem("jwt")
        .then((res) => {
            axios
                .get(`${baseURL}users/${context.stateUser.user.userId}`, {
                    headers: { Authorization: `Bearer ${res}` },
                })
                .then((user) => setUserProfile(user.data))
        })
        .catch((error) => console.log(error))
 
    return () => {
        setUserProfile(); 
    }

}, [context.stateUser.isAuthenticated]))

// console.log(userProfile ? userProfile.age: "")

  return (
    <SafeAreaProvider style={styles.container}>
      <Container style={styles.ImageContainer}>
        <View style={styles.ImageCircle}>
          <Image
            source={{uri:userProfile ? userProfile.profile_picture.url: ""}}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </Container>
    
      <FormContainerProfile title={userProfile ? userProfile.user_name : ""} />
 
       
 
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ed45450f",
  },

  ImageContainer: {
    maxWidth: windowWidth,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10, 
  },
  ImageCircle: {
    backgroundColor: Colors.light,
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  image: {
    height: 100,
    maxWidth: 100,
    minWidth: 100,
    borderRadius: 50,
  },

  info: { 
    fontWeight:"bold",  
    textAlign: "center",  
    fontSize:18,
    maxWidth: "90%",
    height: 40, 
    margin: 10, 
    paddingLeft: 20,
    // borderWidth :1,
    borderColor: Colors.underline,
    borderRadius:10


  },
  infoContainer:{
    alignItems: "center",
    paddingTop:20
  },
  Lowercontainer: {
    flex: 3,
    flexDirection: "row", 
    justifyContent: "center",
    marginTop:80,
    padding:15

  },
  buttonContainer: {
    flex: 1,
  },
  appButtonContainerLogin: {
    backgroundColor: "#fff",
    borderWidth: 2,
    height: 50,
    width: windowWidth/2.3,
    borderRadius: 5,
    borderColor: "#ff1717",
    paddingVertical: 10,
    paddingHorizontal: 12,
    position: "absolute",
    bottom: 10,
    margin: 5,
  },
  appButtonTextLogin: {
    fontSize: 14,
    color: "#ff1717",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  appButtonContainerRegister: {
    backgroundColor: "#ff1717",
    borderWidth: 2,
    height: 50,
    width: windowWidth/2.3,
    borderRadius: 5,
    borderColor: "#ff1717",
    paddingVertical: 10,
    paddingHorizontal: 12,
    position: "absolute",
    bottom: 10,
    margin: 5,
  },
  appButtonTextRegister: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Health