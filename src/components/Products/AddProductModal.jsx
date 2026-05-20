import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, closeAddModal } from '../../features/products/productsSlice';
import Button from '../UI/Button';
import './AddProductModal.css';

const categoryEmojis = {
  Vegetables: '🥬',
  Fruits: '🍎',
  Herbs: '🌿',
  'Dairy & Eggs': '🥚',
  Grains: '🌾',
  Pantry: '🫙',
  Beverages: '🥤',
};

const categories = ['Vegetables', 'Fruits', 'Herbs', 'Dairy & Eggs', 'Grains', 'Pantry', 'Beverages'];

const initialForm = {
  name: '',
  category: 'Vegetables',
  price: '',
  stock: '',
  description: '',
  status: 'Available',
};

function AddProductModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.products.isAddModalOpen);
  const [form, setForm] = useState(initialForm);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.price) return;

    dispatch(
      addProduct({
        name: form.name.trim(),
        category: form.category,
        price: parseFloat(form.price),
        stock: parseInt(form.stock, 10) || 0,
        description: form.description.trim(),
        status: form.status,
        unit: 'unit',
        image: categoryEmojis[form.category] || '📦',
      })
    );

    setForm(initialForm);
    dispatch(closeAddModal());
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeAddModal());
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal animate-scale-in">
        {/* Header */}
        <div className="modal__header">
          <h2 className="modal__title">Add New Product</h2>
          <button
            className="modal__close"
            onClick={() => dispatch(closeAddModal())}
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__form-grid">
            {/* Product Name */}
            <div className="modal__field">
              <label className="modal__label" htmlFor="product-name">
                Product Name
              </label>
              <input
                id="product-name"
                type="text"
                name="name"
                className="modal__input"
                placeholder="e.g. Organic Tomatoes"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div className="modal__field">
              <label className="modal__label" htmlFor="product-category">
                Category
              </label>
              <select
                id="product-category"
                name="category"
                className="modal__input modal__select"
                value={form.category}
                onChange={handleChange}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {categoryEmojis[cat]} {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div className="modal__field">
              <label className="modal__label" htmlFor="product-price">
                Price ($)
              </label>
              <div className="modal__input-prefix-wrapper">
                <span className="modal__input-prefix">$</span>
                <input
                  id="product-price"
                  type="number"
                  name="price"
                  className="modal__input modal__input--with-prefix"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Stock */}
            <div className="modal__field">
              <label className="modal__label" htmlFor="product-stock">
                Stock Quantity
              </label>
              <input
                id="product-stock"
                type="number"
                name="stock"
                className="modal__input"
                placeholder="0"
                min="0"
                value={form.stock}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description — full width */}
          <div className="modal__field modal__field--full">
            <label className="modal__label" htmlFor="product-description">
              Description
            </label>
            <textarea
              id="product-description"
              name="description"
              className="modal__input modal__textarea"
              placeholder="Brief product description..."
              rows="3"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {/* Status — full width */}
          <div className="modal__field modal__field--full">
            <label className="modal__label" htmlFor="product-status">
              Status
            </label>
            <select
              id="product-status"
              name="status"
              className="modal__input modal__select"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* Actions */}
          <div className="modal__actions">
            <Button
              variant="outline"
              type="button"
              onClick={() => dispatch(closeAddModal())}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
