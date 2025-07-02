import React from 'react';

const ProgramCard = ({ title, description, imageUrl }) => (
  <div className="program-card">
    <div 
      className="program-image" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div>
      <p className="program-title">{title}</p>
      <p className="program-description">{description}</p>
    </div>
  </div>
);

export default ProgramCard;