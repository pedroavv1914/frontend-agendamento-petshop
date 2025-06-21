import React, { useState, useEffect } from "react";
import AgendaList from "./components/AgendaList";
import AgendamentoForm from "./components/AgendamentoForm";
import DateFilter from "./components/DateFilter";
import "./App.css";
import { getAgendamentos, addAgendamento, deleteAgendamento } from "./api";

function App() {
  const [dataSelecionada, setDataSelecionada] = useState(() => new Date().toISOString().slice(0, 10));
  const [agendamentos, setAgendamentos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchAgendamentos = async () => {
    const data = await getAgendamentos(dataSelecionada);
    setAgendamentos(data);
  };

  useEffect(() => {
    fetchAgendamentos();
  }, [dataSelecionada]);

  const handleAdd = async (novo) => {
    await addAgendamento(novo);
    setShowForm(false);
    fetchAgendamentos();
  };

  const handleDelete = async (id) => {
    await deleteAgendamento(id);
    fetchAgendamentos();
  };

  return (
    <>
      <div className="brand-header">
        <span className="brand-dot" /> <span className="brand-title">Agenda Petshop</span>
      </div>
      <div className="container">
        <header>
          <h1>Suas agendas</h1>
          <button className="novo-btn" onClick={() => setShowForm(true)}>
            + Novo Agendamento
          </button>
          <DateFilter value={dataSelecionada} onChange={setDataSelecionada} />
        </header>
      <AgendaList agendamentos={agendamentos} onDelete={handleDelete} />
      {showForm && (
        <AgendamentoForm
          onClose={() => setShowForm(false)}
          onAdd={handleAdd}
          dataDefault={dataSelecionada}
        />
      )}
    </div>
    </>
  );
}

export default App;