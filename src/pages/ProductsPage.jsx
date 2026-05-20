import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredProducts,
  setSearchQuery,
  setFilterStatus,
  toggleAddModal,
} from '../features/products/productsSlice';
import ProductCard from '../components/Products/ProductCard';
import AddProductModal from '../components/Products/AddProductModal';
import Button from '../components/UI/Button';
import './ProductsPage.css';

const statusFilters = ['All', 'Available', 'Out of Stock'];

function ProductsPage() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const filterStatus = useSelector((state) => state.products.filterStatus);
  const filteredProducts = useSelector(selectFilteredProducts);

  return (
    <div className="products-page animate-slide-up">
      {/* Page Header */}
      <div className="products-page__header">
        <div className="products-page__header-left">
          <h1 className="products-page__title">Products</h1>
          <p className="products-page__subtitle">Manage your product inventory</p>
        </div>
        <Button
          variant="primary"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          }
          onClick={() => dispatch(toggleAddModal())}
        >
          Add Product
        </Button>
      </div>

      {/* Filter / Search Bar */}
      <div className="products-page__filters">
        <div className="products-page__search-wrapper">
          <svg
            className="products-page__search-icon"
            width="18"
            height="18"
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
            type="text"
            className="products-page__search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>

        <div className="products-page__status-filters">
          {statusFilters.map((status) => (
            <button
              key={status}
              className={`products-page__filter-btn ${
                filterStatus === status ? 'products-page__filter-btn--active' : ''
              }`}
              onClick={() => dispatch(setFilterStatus(status))}
            >
              {status}
            </button>
          ))}
        </div>

        <span className="products-page__count">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="products-page__grid">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index} />
          ))}
        </div>
      ) : (
        <div className="products-page__empty">
          <span className="products-page__empty-icon">📦</span>
          <h3 className="products-page__empty-title">No products found</h3>
          <p className="products-page__empty-text">
            Try adjusting your search or filters
          </p>
        </div>
      )}

      {/* Add Product Modal */}
      <AddProductModal />
    </div>
  );
}

export default ProductsPage;
