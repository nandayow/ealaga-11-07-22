import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

//  Screens
import VisitorViewContainer from "../Screens/Visitors/VisitorViewContainer";
import LoginContainer from "../Screens/User/Login";
import Register from "../Screens/User/Register";
   
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Visitor"
                component={VisitorViewContainer}
                options={{
                    headerShown: false 

                }}
            /> 

        <Stack.Screen 
                name="Login"
                component={LoginContainer}
                options={{
                    headerShown: false
                }}
            />
            
        <Stack.Screen 
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            /> 
 
        </Stack.Navigator>
    )
}
 

export default function UserNavigator() {
    return <MyStack />
}