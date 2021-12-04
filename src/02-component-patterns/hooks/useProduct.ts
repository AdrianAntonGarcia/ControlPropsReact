import { useEffect, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/product.interfaces';

interface UseProductProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  value = 0,
  product,
}: UseProductProps) => {
  const [counter, setCounter] = useState(value);
  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };
  useEffect(() => {
    setCounter(value);
  }, [value]);
  return { counter, increaseBy };
};
