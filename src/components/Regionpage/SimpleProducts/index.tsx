import { FC } from 'react';
import { SimpleProductsInfo } from '../../../types';
import { SimpleProduct } from '../SimpleProduct';
export const SimpleProducts: FC<SimpleProductsInfo> = ({ images }) => {
  return (
    <div className='flex  items-center bg-deepPink'>
      {images.map((item, index) => (
        <SimpleProduct
          key={item.img}
          img={item.img}
          className={index === images.length - 1 ? 'lg:block hidden' : 'block'}
        />
      ))}
    </div>
  );
};
