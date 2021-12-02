import ProductCard from '../components';
import { ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {/* <ProductCard product={product}>
          <ProductCard />
          <ProductCard title={product.title} />
          <ProductCard counter={0} increaseBy={() => {}} />
        </ProductCard> */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} style={{ backgroundColor: '#B2EBF2' }}>
          <ProductImage
            className="custom-image"
            style={{ boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
