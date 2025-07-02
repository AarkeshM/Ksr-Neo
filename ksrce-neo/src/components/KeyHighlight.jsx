import React from 'react';

const KeyHighlight = ({ title, value }) => (
  <div className="highlight-card">
    <p className="highlight-title">{title}</p>
    <p className="highlight-value">{value}</p>
  </div>
);

export default KeyHighlight;