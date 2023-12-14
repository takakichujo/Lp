import { FC } from 'react';
import { RegionContentInfo } from '../../../types';
import { CartButton } from '../../Commons/CartButton';
import { FavoriteMark } from '../../Commons/FavoriteMark';
import { DescriptionProduct } from '../DescriptionProduct';
import { PriceProduct } from '../PriceProduct';
import { Bell } from '../../Commons/Bell';
export const RegionProduct: FC<RegionContentInfo> = ({
  img,
  title,
  content,
  moneyTitle,
  moneyContent,
  isCart = true,
}) => {
  return (
    <div className='lg:pt-16 pt-[8px] lg:pr-20 pr-[8px] pb-16 lg:pl-20 pl-[8px] border border-gray-300 border-solid border-gray-200 border-1 relative text-center w-full lg:h-436 h-[348px] flex flex-col justify-around'>
      <div className='lg:mb-0 mb-[15px]'>
        <FavoriteMark />
        <img className='w-full lg:h-240 h-[160px] object-contain' src={img} />
      </div>
      <DescriptionProduct title={title} content={content} />
      <div className='flex justify-between items-end'>
        <PriceProduct moneyTitle={moneyTitle} moneyContent={moneyContent} />
        {isCart ? <CartButton /> : <Bell />}
      </div>
    </div>
  );
};
