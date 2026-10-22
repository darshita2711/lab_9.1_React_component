import type { ProductDisplayProps } from '../../types';

export function ProductDisplay({
product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div className="product-card">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      )}

      <h2>{product.name}</h2>

      <p className="product-price">
        ${product.price.toFixed(2)}
      </p>

      {showDescription && (
        <p>{product.description}</p>
      )}

      {showStockStatus && (
        <p className={product.inStock ? 'in-stock' : 'out-of-stock'}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}

      {onAddToCart && (
        <button
          type="button"
          className="cart-button"
          onClick={() => onAddToCart(product.id)}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      )}

      {children && (
        <div className="product-extra">{children}</div>
      )}
    </div>
  );
}