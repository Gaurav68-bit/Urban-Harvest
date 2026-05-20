import React from 'react';
import './Button.css';

const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon = null,
  fullWidth = false,
  children,
  onClick,
  disabled,
  className = '',
  ...rest
}) => {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full-width' : '',
    loading ? 'btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      <span className="btn__content">
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default Button;
