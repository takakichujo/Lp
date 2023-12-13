import { FC } from 'react';
type Props = {
  moneyTitle: string;
  moneyContent: string;
};
export const PriceProduct: FC<Props> = ({ moneyTitle, moneyContent }) => {
  return (
    <div className='flex justify-between items-end mb-1'>
      <h3 className='text-deepPink text-[17px] mr-[5px]'>{moneyTitle}</h3>
      <p className='text-gray-400 mt-[px] text-[12px]'>{moneyContent}</p>
    </div>
  );
};
