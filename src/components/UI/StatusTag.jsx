import React from 'react';
import './StatusTag.css';

const colorMap = {
  Delivered: 'green',
  Available: 'green',
  'In Transit': 'amber',
  Preparing: 'amber',
  Cancelled: 'red',
  'Out of Stock': 'red',
};

const StatusTag = ({ status }) => {
  const colorClass = colorMap[status] || 'green';

  return (
    <span className={`status-tag status-tag--${colorClass}`}>
      <span className="status-tag__dot" aria-hidden="true" />
      {status}
    </span>
  );
};

export default StatusTag;
