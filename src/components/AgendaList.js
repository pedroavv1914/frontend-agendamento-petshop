import React from "react";
import PeriodCard from "./PeriodCard";
import "./AgendaList.css";

function AgendaList({ agendamentos, onDelete }) {
  return (
    <div className="agenda-list">
      {agendamentos.map((periodo) => (
        <PeriodCard
          key={periodo.periodo}
          periodo={periodo.periodo}
          agendamentos={periodo.agendamentos}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default AgendaList;