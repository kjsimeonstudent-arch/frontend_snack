import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { getAppointments, deleteAppointment } from "../services/api";

export default function AppointmentList({ navigation }) {
  const [data, setData] = useState([]);

  const load = () => {
    getAppointments().then(setData);
  };

  useEffect(() => {
    const focus = navigation.addListener("focus", load);
    return focus;
  }, [navigation]);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Add Appointment" onPress={() => navigation.navigate("Add")} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit", { item })}
          >
            <View
              style={{
                padding: 10,
                marginTop: 10,
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <Text>{item.client_name}</Text>
              <Text>{item.service}</Text>
              <Text>{item.date} at {item.time}</Text>
              <Button title="Delete" onPress={() => { deleteAppointment(item.id).then(load); }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}