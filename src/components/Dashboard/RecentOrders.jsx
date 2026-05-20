import { useSelector } from 'react-redux';
import StatusTag from '../UI/StatusTag';
import './RecentOrders.css';

const RecentOrders = () => {
  const recentOrders = useSelector((state) => state.dashboard.recentOrders);

  return (
    <div className="recent-orders">
      <div className="recent-orders__header">
        <h2 className="recent-orders__title">Recent Orders</h2>
        <button className="recent-orders__view-all">View All</button>
      </div>

      <div className="recent-orders__table-wrapper">
        {recentOrders && recentOrders.length > 0 ? (
          <table className="recent-orders__table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th className="col-items">Items</th>
                <th>Total</th>
                <th>Status</th>
                <th className="col-date">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <span className="recent-orders__order-id">{order.id}</span>
                  </td>
                  <td>
                    <span className="recent-orders__customer">{order.customer}</span>
                  </td>
                  <td className="col-items">
                    <span className="recent-orders__items">{order.items}</span>
                  </td>
                  <td>
                    <span className="recent-orders__total">
                      ${order.total.toFixed(2)}
                    </span>
                  </td>
                  <td>
                    <StatusTag status={order.status} />
                  </td>
                  <td className="col-date">
                    <span className="recent-orders__date">{order.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="recent-orders__empty">
            No recent orders to display.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentOrders;
