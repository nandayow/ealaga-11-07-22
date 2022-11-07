import React, { useCallback, useContext, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {  Container, Input } from "native-base"; 
import { useFocusEffect } from "@react-navigation/native";
  
// Color
import Colors from "../../../Shared/Color";

// Fething Data
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../../../assets/common/baseUrl";

// Checking Auth User
import AuthGlobal from "../../../Context/store/AuthGlobal";
 

// Shared
import FormContainerProfile from "../../../Shared/Form/FormContainerProfile";
import InputProfile from "../../../Shared/Form/InputProfile";

// Dimensions
const windowWidth = Dimensions.get("window").width;

function Credentials(props) {
  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState()

  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
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
                .then((user) => setUserProfile(user.data) , setUsername(context.stateUser.user.username))
                // console.log(context.stateUser.user.username)
        })
        .catch((error) => console.log(error))
 
    return () => {
        setUserProfile(); 
        setUsername();
    }

}, [context.stateUser.isAuthenticated]))

 const UpdateProfile = () => {
  console.log(username)
 }

 
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
    
     
      <FormContainerProfile title={userProfile ? userProfile.user_name: ""}>
            <InputProfile
              placeholder={"Username"}
              name={"username"}
              id={"username"}
              value={username}
              onChangeText={(text) => setUsername(text.toLowerCase())}
            />

            <InputProfile
              placeholder={"Contact Number"}
              name={"contactNumber"}
              id={"contactNumber"}
              value={userProfile ? userProfile.phone.toString(): ""}
              onChangeText={(text) => setContactNumber(text.toLowerCase())}
            />

            <InputProfile
              placeholder={"Email Address"}
              name={"email"}
              id={"email"}
              value={userProfile ? userProfile.email : ""}
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />

            <InputProfile 
              placeholder={"oldPassword"}
              name={"oldPassword"}
              id={"oldPassword"}
              value={oldPassword}
              onChangeText={(text) => setOldPassword(text.toLowerCase())}
            />

            <InputProfile
              placeholder={"New Password"}
              name={"newPassword"}
              id={"newPassword"}
              value={newPassword}
              onChangeText={(text) => setNewPassword(text.toLowerCase())}
            />

            <InputProfile
              placeholder={"Confirm Password"}
              name={"confirmPassword"}
              id={"confirmPassword"}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text.toLowerCase())}
            />
            <View style={[styles.Lowercontainer, { flex: 3 }]}>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={styles.appButtonContainerLogin}
                        onPress={() => props.navigation.navigate("Personal")}
                      >
                        <Text style={styles.appButtonTextLogin}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={styles.appButtonContainerRegister}
                        onPress={() => [
                          UpdateProfile()
                      ]}
                      >
                        <Text style={styles.appButtonTextRegister}>Update</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.Line}></View>
            </View>
</FormContainerProfile>  

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
    margin: 5,
    fontSize:16,
    fontWeight:"bold",  
    textAlign: "center",
    color:"black"


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
    margin: 10,
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
    margin: 10,
  },
  appButtonTextRegister: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});


export default Credentials