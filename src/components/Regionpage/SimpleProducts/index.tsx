import { FC } from 'react';
import { SimpleProductsInfo } from '../../../types';
import { SimpleProduct } from '../SimpleProduct';
export const SimpleProducts: FC<SimpleProductsInfo> = ({ images }) => {
  return (
    <div className='flex'>
      {images.map((item) => (
        <SimpleProduct img={item.img} />
      ))}
    </div>
  );
};
