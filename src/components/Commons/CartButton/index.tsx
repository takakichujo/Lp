import { FC } from 'react';

export const CartButton: FC = () => {
  return (
    <button className='bg-deepPink w-60 h-40 rounded-40'>
      <img
        className='w-20 h-19 mx-auto'
        src='../../src/img/Region/Favicon/cart.png'
      />
    </button>
  );
};
