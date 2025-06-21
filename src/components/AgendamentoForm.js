import React, { useState } from "react";
import "./AgendamentoForm.css";

function AgendamentoForm({ onClose, onAdd, dataDefault }) {
  const [form, setForm] = useState({
    nome_pet: "",
    nome_tutor: "",
    servico: "",
    data: dataDefault,
    horario: "09:00",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const [hora, minuto] = form.horario.split(":").map(Number);
    if (hora < 9 || (hora === 21 && minuto > 0) || hora > 21) {
      alert("Só é permitido agendar entre 09:00 e 21:00.");
      return;
    }
    onAdd(form);
  }

  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>Agende um atendimento</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Pet:
            <input name="nome_pet" value={form.nome_pet} onChange={handleChange} required />
          </label>
          <label>
            Nome do Tutor:
            <input name="nome_tutor" value={form.nome_tutor} onChange={handleChange} required />
          </label>
          <label>
            Serviço:
            <input name="servico" value={form.servico} onChange={handleChange} required />
          </label>
          <label>
            Data:
            <input type="date" name="data" value={form.data} onChange={handleChange} required />
          </label>
          <label>
            Horário:
            <input type="time" name="horario" value={form.horario} onChange={handleChange} required min="09:00" max="21:00" />
          </label>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancelar
            </button>
            <button type="submit" className="add-btn">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgendamentoForm;