import { FC } from 'react';
import { SimpleProductsInfo } from '../../../types';
import { SimpleProduct } from '../SimpleProduct';
export const SimpleProducts: FC<SimpleProductsInfo> = ({ images }) => {
  return (
    <div className='flex  items-center ml-[3px] mr-[3px] grow-[2]'>
      {images.map((item) => (
        <SimpleProduct key={item.img} img={item.img} />
      ))}
    </div>
  );
};
