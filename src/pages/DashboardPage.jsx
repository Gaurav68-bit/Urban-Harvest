import { useSelector } from 'react-redux';
import StatsCard from '../components/UI/StatsCard';
import RecentOrders from '../components/Dashboard/RecentOrders';
import './DashboardPage.css';

const weeklyData = [
  { day: 'Mon', height: '60%' },
  { day: 'Tue', height: '80%' },
  { day: 'Wed', height: '45%' },
  { day: 'Thu', height: '90%' },
  { day: 'Fri', height: '70%' },
  { day: 'Sat', height: '50%' },
  { day: 'Sun', height: '85%' },
];

const topProducts = [
  { rank: 1, name: 'Farm Fresh Eggs', sales: 456, emoji: '🥚' },
  { rank: 2, name: 'Avocado Box', sales: 312, emoji: '🥑' },
  { rank: 3, name: 'Almond Milk', sales: 267, emoji: '🥛' },
];

const DashboardPage = () => {
  const userName = useSelector(
    (state) => state.auth.user?.name || state.dashboard.userProfile.name
  );
  const stats = useSelector((state) => state.dashboard.stats);

  const firstName = userName ? userName.split(' ')[0] : 'there';

  return (
    <div className="dashboard-page">
      {/* Welcome Section */}
      <section className="dashboard-welcome">
        <div className="dashboard-welcome__content">
          <h1 className="dashboard-welcome__title">
            Welcome back, {firstName}! 👋
          </h1>
          <p className="dashboard-welcome__subtitle">
            Here&apos;s what&apos;s happening with your store today.
          </p>
        </div>
        <button className="dashboard-welcome__action">
          <svg
            className="dashboard-welcome__action-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Report
        </button>
      </section>

      {/* Stats Grid */}
      <section className="dashboard-stats">
        {stats &&
          stats.map((stat, index) => (
            <StatsCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeLabel={stat.changeLabel}
              icon={stat.icon}
              color={stat.color}
              delay={index}
            />
          ))}
      </section>

      {/* Bottom Section */}
      <section className="dashboard-bottom">
        <div className="dashboard-bottom__main">
          <RecentOrders />
        </div>
        <div className="dashboard-bottom__side">
          <div className="activity-panel">
            <h3 className="activity-panel__title">Order Activity</h3>

            {/* Bar Chart */}
            <div className="activity-chart">
              <div className="activity-chart__bars">
                {weeklyData.map((item) => (
                  <div key={item.day} className="activity-chart__bar-wrapper">
                    <div
                      className="activity-chart__bar"
                      style={{ height: item.height }}
                    />
                    <span className="activity-chart__label">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Products */}
            <div className="top-products">
              <h4 className="top-products__title">Top Products</h4>
              {topProducts.map((product) => (
                <div key={product.rank} className="top-products__item">
                  <div className="top-products__avatar">{product.emoji}</div>
                  <div className="top-products__info">
                    <span className="top-products__rank">#{product.rank}</span>
                    <span className="top-products__name">
                      {product.name}
                    </span>
                    <span className="top-products__sales">
                      {product.sales} sales
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
