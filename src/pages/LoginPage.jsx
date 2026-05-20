import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, setRememberMe, clearError } from '../features/auth/authSlice';
import Button from '../components/UI/Button';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated, rememberMe } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleToggleRemember = () => {
    dispatch(setRememberMe(!rememberMe));
  };

  return (
    <div className="login">
      {/* ===== Left Panel (Decorative) ===== */}
      <div className="login__left">
        {/* Floating decorative circles */}
        <div className="login__floating login__floating--1" />
        <div className="login__floating login__floating--2" />
        <div className="login__floating login__floating--3" />
        <div className="login__floating login__floating--4" />
        <div className="login__floating login__floating--5" />
        <div className="login__floating login__floating--6" />

        <div className="login__left-content">
          {/* Icon */}
          <div className="login__icon-circle" aria-hidden="true">
            🌿
          </div>

          {/* Brand Title */}
          <h1 className="login__brand-title">
            <span className="login__brand-title--white">Urban </span>
            <span className="login__brand-title--green">Harvest</span>
          </h1>

          {/* Subtitle */}
          <p className="login__brand-subtitle">
            Farm-fresh produce, delivered to your doorstep
          </p>

          {/* Feature bullets */}
          <div className="login__features">
            <div className="login__feature-item">
              <span className="login__feature-icon">🚚</span>
              <span>Fast delivery across 50+ cities</span>
            </div>
            <div className="login__feature-item">
              <span className="login__feature-icon">🌱</span>
              <span>100% organic certified products</span>
            </div>
            <div className="login__feature-item">
              <span className="login__feature-icon">📊</span>
              <span>Real-time order tracking</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Right Panel (Login Form) ===== */}
      <div className="login__right">
        <div className="login__form-container">
          <h2 className="login__heading">Welcome back</h2>
          <p className="login__subheading">Sign in to your dashboard</p>

          <form className="login__form" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="login__field">
              <label className="login__label" htmlFor="login-email">
                Email Address
              </label>
              <div className="login__input-wrapper">
                <svg
                  className="login__input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                <input
                  id="login-email"
                  className="login__input"
                  type="email"
                  placeholder="admin@urbanharvest.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="login__field">
              <label className="login__label" htmlFor="login-password">
                Password
              </label>
              <div className="login__input-wrapper">
                <svg
                  className="login__input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  id="login-password"
                  className="login__input"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  style={{ paddingRight: '48px' }}
                />
                <button
                  type="button"
                  className="login__password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    /* Eye-off icon */
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    /* Eye icon */
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="login__options-row">
              <div
                className="login__remember"
                onClick={handleToggleRemember}
                role="checkbox"
                aria-checked={rememberMe}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggleRemember();
                  }
                }}
              >
                <button
                  type="button"
                  className={`login__toggle ${rememberMe ? 'login__toggle--active' : ''}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <span className="login__toggle-knob" />
                </button>
                <span className="login__remember-label">Remember me</span>
              </div>

              <button type="button" className="login__forgot-link">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <div className="login__button-wrapper">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                loading={loading}
                type="submit"
              >
                Sign In
              </Button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="login__error" role="alert">
                <svg
                  className="login__error-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <span className="login__error-text">{error}</span>
              </div>
            )}

            {/* Demo Credentials Hint */}
            <div className="login__demo-hint">
              <svg
                className="login__demo-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span className="login__demo-text">
                Demo: admin@urbanharvest.com / password123
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
