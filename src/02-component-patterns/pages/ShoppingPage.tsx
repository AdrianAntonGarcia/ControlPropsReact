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
      // Si no existe lo creamos
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      // Cuando el producto tiene más de una unidad
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: { ...productInCart },
        };
      } else {
        // Borrar el producto
        delete oldShoppingCart[product.id];
        return { ...oldShoppingCart };
      }
      // if (count === 0) {
      //   delete oldShoppingCart[product.id];
      //   return { ...oldShoppingCart };
      // } else {
      //   return { ...oldShoppingCart, [product.id]: { ...product, count } };
      // }
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
            value={
              shoppingCart[product.id] ? shoppingCart[product.id].count : 0
            }
            onChange={onProductCountChange}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart ">
        {/* también se puede hacer con el .entries */}
        {Object.keys(shoppingCart).map((index) => (
          <ProductCard
            key={index}
            product={shoppingCart[index]}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            value={shoppingCart[index].count}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons
              style={{ display: 'flex', justifyContent: 'center' }}
              className="custom-buttons"
            />
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
