import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { updateAppointment } from "../services/api";

export default function EditAppointment({ route, navigation }) {
  const { item } = route.params;
  const [form, setForm] = useState(item);

  const submit = () => {
    updateAppointment(item.id, form).then(() => navigation.goBack());
  };

  return (
    <View style={{ padding: 20 }}>
      {Object.keys(form).map((key) =>
        key !== "id" ? (
          <TextInput
            key={key}
            placeholder={key}
            style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            value={String(form[key])}
            onChangeText={(txt) => setForm({ ...form, [key]: txt })}
          />
        ) : null
      )}
      <Button title="Update" onPress={submit} />
    </View>
  );
}