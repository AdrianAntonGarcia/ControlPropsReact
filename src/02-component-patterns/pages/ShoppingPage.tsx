import { useState } from 'react';
import ProductCard from '../components';
import { Product } from '../interfaces';
import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        delete oldShoppingCart[product.id];
        return { ...oldShoppingCart };
      } else {
        return { ...oldShoppingCart, [product.id]: { ...product, count } };
      }
    });
  };
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart ">
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: '100px' }}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product1}
          className="bg-dark text-white"
          style={{ width: '100px' }}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
