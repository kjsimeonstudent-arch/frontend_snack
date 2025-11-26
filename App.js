import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppointmentList from "./screens/AppointmentList";
import AddAppointment from "./screens/AddAppointment";
import EditAppointment from "./screens/EditAppointment";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={AppointmentList} />
        <Stack.Screen name="Add" component={AddAppointment} />
        <Stack.Screen name="Edit" component={EditAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}