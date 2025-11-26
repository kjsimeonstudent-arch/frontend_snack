const API_BASE = "https://your-render-url.com/api/appointments/";

export const getAppointments = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const createAppointment = async (data) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateAppointment = async (id, data) => {
  const res = await fetch(API_BASE + id + "/", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteAppointment = async (id) => {
  await fetch(API_BASE + id + "/", {
    method: "DELETE",
  });
};