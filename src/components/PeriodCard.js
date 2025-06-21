import React from "react";
import "./PeriodCard.css";

const periodConfigs = {
  manhã: { emoji: "🌞", color: "#4FC3F7", horario: "09h-12h" },
  tarde: { emoji: "🌅", color: "#FFD54F", horario: "13h-18h" },
  noite: { emoji: "🌙", color: "#9575CD", horario: "19h-21h" },
};

function PeriodCard({ periodo, agendamentos, onDelete }) {
  const config = periodConfigs[periodo] || { emoji: "⏰", color: "#888", horario: "" };
  return (
    <div className="period-card">
      <div className="period-title">
        <span className="period-emoji" style={{ fontSize: 22 }}>{config.emoji}</span>
        <span style={{ fontWeight: 700, color: '#fff', fontSize: '1.13em' }}>
          {periodo.charAt(0).toUpperCase() + periodo.slice(1)}
        </span>
        <span className="period-horario" style={{ marginLeft: 'auto', color: '#bdbdbd', fontWeight: 500, fontSize: '0.99em' }}>{config.horario}</span>
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {agendamentos.length === 0 && (
          <li className="vazio">Nenhum agendamento</li>
        )}
        {agendamentos.map((ag) => (
          <li key={ag.id} className="agendamento-item">
            <div className="agendamento-hora">
              <strong>{ag.horario.slice(0, 5)}</strong>
            </div>
            <div className="agendamento-pet-tutor">
              <span className="pet-nome">{ag.nome_pet} <span style={{ color: '#bdbdbd', fontWeight: 400 }}> / </span>{ag.nome_tutor}</span>
            </div>
            <div className="agendamento-servico">
              <span className="servico">{ag.servico}</span>
            </div>
            <button className="del-btn" onClick={() => onDelete(ag.id)}>
              Remover agendamento
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeriodCard;