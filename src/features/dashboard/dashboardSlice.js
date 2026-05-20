import { createSlice } from '@reduxjs/toolkit';
import { mockStats, mockRecentOrders, mockUser } from '../../data/mockData';

const initialState = {
  stats: mockStats,
  recentOrders: mockRecentOrders,
  userProfile: mockUser,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.recentOrders.find((o) => o.id === orderId);
      if (order) {
        order.status = status;
      }
    },
    refreshDashboard: (state) => {
      // In a real app, this would trigger an API call
      state.stats = mockStats;
      state.recentOrders = mockRecentOrders;
    },
  },
});

export const { setLoading, updateOrderStatus, refreshDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
