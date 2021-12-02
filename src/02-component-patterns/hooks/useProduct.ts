import { useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/product.interfaces';

interface UseProductProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: UseProductProps) => {
  const [counter, setCounter] = useState(0);
  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };
  return { counter, increaseBy };
};
