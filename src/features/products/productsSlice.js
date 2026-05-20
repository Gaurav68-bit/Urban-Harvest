import { createSlice } from '@reduxjs/toolkit';
import { mockProducts } from '../../data/mockData';

const initialState = {
  products: mockProducts,
  searchQuery: '',
  filterStatus: 'All',
  filterCategory: 'All',
  isAddModalOpen: false,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
    toggleAddModal: (state) => {
      state.isAddModalOpen = !state.isAddModalOpen;
    },
    closeAddModal: (state) => {
      state.isAddModalOpen = false;
    },
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: `prod-${String(state.products.length + 1).padStart(3, '0')}`,
        sales: 0,
        rating: 0,
      };
      state.products.unshift(newProduct);
    },
    toggleProductStatus: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.status = product.status === 'Available' ? 'Out of Stock' : 'Available';
        product.stock = product.status === 'Available' ? 50 : 0;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },
});

// Selectors
export const selectFilteredProducts = (state) => {
  const { products, searchQuery, filterStatus, filterCategory } = state.products;

  return products.filter((product) => {
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === 'All' || product.status === filterStatus;

    const matchesCategory =
      filterCategory === 'All' || product.category === filterCategory;

    return matchesSearch && matchesStatus && matchesCategory;
  });
};

export const {
  setSearchQuery,
  setFilterStatus,
  setFilterCategory,
  toggleAddModal,
  closeAddModal,
  addProduct,
  toggleProductStatus,
  deleteProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
