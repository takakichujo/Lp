import { FC } from 'react';
import { RegionContentInfo } from '../../../types';
import { CartButton } from '../../Commons/CartButton';
import { FavoriteMark } from '../FavoriteMark';
import { PriceDescription } from '../PriceDescription';
import { MoneyContent } from '../MoneyContent';
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
      <PriceDescription title={title} content={content} />
      <div className='flex justify-between items-end'>
        <MoneyContent moneyTitle={moneyTitle} moneyContent={moneyContent} />
        <CartButton />
      </div>
    </div>
  );
};
