import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { createAppointment } from "../services/api";

export default function AddAppointment({ navigation }) {
  const [form, setForm] = useState({
    client_name: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const submit = () => {
    createAppointment(form).then(() => navigation.goBack());
  };

  return (
    <View style={{ padding: 20 }}>
      {Object.keys(form).map((key) => (
        <TextInput
          key={key}
          placeholder={key}
          style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
          value={form[key]}
          onChangeText={(txt) => setForm({ ...form, [key]: txt })}
        />
      ))}
      <Button title="Save" onPress={submit} />
    </View>
  );
}






// draft structure version 1
