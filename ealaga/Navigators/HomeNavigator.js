import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeContainer from "../Screens/Home/HomeContainer";
import ServicesContainer from "../Screens/Services/ServicesContainer";
import HistoryContainer from "../Screens/History/HistoryContainer";
import DonationsContainer from "../Screens/Donations/DonationsContainer";
import ActivitiesContainer from "../Screens/Activities/ActivitiesContainer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Services"
        component={ServicesContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="History"
        component={HistoryContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Donations"
        component={DonationsContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Activities"
        component={ActivitiesContainer}
        options={{
          headerShown: false,
        }}
      />

      
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
