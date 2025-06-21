const API_URL = "http://localhost:3002/agendamentos";

export async function getAgendamentos(data) {
  const res = await fetch(`${API_URL}?data=${data}`);
  return res.json();
}

export async function addAgendamento(agendamento) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(agendamento),
  });
}

export async function deleteAgendamento(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}