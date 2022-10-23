import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  FlightsScreen,
  FlightsSelected,
  ContactDetails,
  CheckOut,
  Reverse,
  ViewBooking
} from "./../screens";

const Stack = createNativeStackNavigator();

function NavigaionMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightsScreen"
          component={FlightsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightsSelected"
          component={FlightsSelected}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Reverse"
          component={Reverse}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ViewBooking"
          component={ViewBooking}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigaionMain;
