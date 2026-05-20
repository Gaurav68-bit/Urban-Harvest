import StatusTag from '../UI/StatusTag';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { toggleProductStatus } from '../../features/products/productsSlice';
import './ProductCard.css';

function ProductCard({ product, delay = 0 }) {
  const dispatch = useDispatch();

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="product-card__star product-card__star--filled">★</span>);
      } else if (i === fullStars && hasHalf) {
        stars.push(<span key={i} className="product-card__star product-card__star--filled">★</span>);
      } else {
        stars.push(<span key={i} className="product-card__star">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div
      className="product-card animate-slide-up"
      style={{ animationDelay: `${delay * 80}ms` }}
    >
      {/* Image Area */}
      <div className="product-card__image">
        <span className="product-card__emoji">{product.image}</span>
        <div className="product-card__status-tag">
          <StatusTag status={product.status} />
        </div>
      </div>

      {/* Content */}
      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>

        <div className="product-card__rating">
          <div className="product-card__stars">{renderStars(product.rating)}</div>
          <span className="product-card__rating-value">{product.rating}</span>
          <span className="product-card__sales">({product.sales} sold)</span>
        </div>

        <div className="product-card__divider" />

        <div className="product-card__footer">
          <div className="product-card__price-group">
            <span className="product-card__price">${product.price.toFixed(2)}</span>
            <span className="product-card__unit">/ {product.unit}</span>
          </div>
          <span className="product-card__stock">
            Stock: {product.stock} units
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="product-card__actions">
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => dispatch(toggleProductStatus(product.id))}
        >
          Toggle Status
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
