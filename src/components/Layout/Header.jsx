import './Header.css';

function Header({ onMenuToggle }) {
  return (
    <header className="header">
      {/* Left section */}
      <div className="header__left">
        {/* Hamburger — visible on mobile/tablet only */}
        <button
          className="header__menu-btn"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar menu"
        >
          <svg
            className="header__menu-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Search bar */}
        <div className="header__search">
          <svg
            className="header__search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="header__search-input"
            type="text"
            placeholder="Search anything..."
            aria-label="Search"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="header__right">
        {/* Notification bell */}
        <button
          className="header__notification"
          aria-label="Notifications"
        >
          <svg
            className="header__notification-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="header__notification-badge">5</span>
        </button>

        {/* Divider */}
        <div className="header__divider" aria-hidden="true" />

        {/* User info */}
        <div className="header__user">
          <div className="header__user-avatar">AM</div>
          <span className="header__user-name">Arjun Mehta</span>
          <svg
            className="header__user-chevron"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
