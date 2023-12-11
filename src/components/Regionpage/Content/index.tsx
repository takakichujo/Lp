import { FC } from 'react';
import { RegionContentInfo } from '../../../types';
import { CartButton } from '../CartButton';
import { FavoriteMark } from '../FavoriteMark';
import { ExplainContent } from '../ExplainContent';
import { MoneyContent } from '../MoneyContent';
export const Content: FC<RegionContentInfo> = ({
  img,
  title,
  content,
  moneyTitle,
  moneyContent,
}) => {
  return (
    <div className='pt-16 pr-20 pb-16 pl-20 border border-gray-300 border-solid border-gray-500 border-1 relative text-center w-250 h-436 flex flex-col justify-around'>
      <div>
        <FavoriteMark />
        <img className='w-full h-240 object-contain' src={img} />
      </div>
      <ExplainContent title={title} content={content} />
      <div className='flex justify-between items-end'>
        <MoneyContent moneyTitle={moneyTitle} moneyContent={moneyContent} />
        <CartButton />
      </div>
    </div>
  );
};
