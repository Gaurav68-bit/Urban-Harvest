import React from 'react';
import './StatsCard.css';

const iconMap = {
  orders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  revenue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  deliveries: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
};

const ArrowUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ArrowDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const StatsCard = ({
  title,
  value,
  change = 0,
  changeLabel = '',
  icon = 'orders',
  color = 'primary',
  delay = 0,
}) => {
  const isPositive = change >= 0;

  return (
    <div
      className={`stats-card stats-card--${color}`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="stats-card__header">
        <div className={`stats-card__icon stats-card__icon--${color}`}>
          {iconMap[icon] || iconMap.orders}
        </div>

        {change !== 0 && (
          <span
            className={`stats-card__change stats-card__change--${
              isPositive ? 'positive' : 'negative'
            }`}
          >
            {isPositive ? <ArrowUp /> : <ArrowDown />}
            {Math.abs(change)}%
          </span>
        )}
      </div>

      <p className="stats-card__title">{title}</p>
      <p className="stats-card__value">{value}</p>

      {changeLabel && (
        <div className="stats-card__footer">
          <span className="stats-card__change-label">{changeLabel}</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
