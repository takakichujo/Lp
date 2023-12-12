import { FC } from 'react';
import { RegionContentInfo } from '../../../types';
import { CartButton } from '../../Commons/CartButton';
import { FavoriteMark } from '../FavoriteMark';
import { DescriptionProduct } from '../DescriptionProduct';
import { PriceProduct } from '../PriceProduct';
export const RegionProduct: FC<RegionContentInfo> = ({
  img,
  title,
  content,
  moneyTitle,
  moneyContent,
}) => {
  return (
    <div className='pt-16 pr-20 pb-16 pl-20 border border-gray-300 border-solid border-gray-200 border-1 relative text-center w-full h-436 flex flex-col justify-around'>
      <div>
        <FavoriteMark />
        <img className='w-full h-240 object-contain' src={img} />
      </div>
      <DescriptionProduct title={title} content={content} />
      <div className='flex justify-between items-end'>
        <PriceProduct moneyTitle={moneyTitle} moneyContent={moneyContent} />
        <CartButton />
      </div>
    </div>
  );
};
