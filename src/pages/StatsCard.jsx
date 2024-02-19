import React from 'react';

const StatsCard = ({ title, count, Icon }) => { // Añade Icon aquí
  return (
    <div className="stats-card">
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-count">{count}</div>
      </div>
      <div className="card-icon">
        {Icon}
      </div>
    </div>
  );
};

export default StatsCard;
