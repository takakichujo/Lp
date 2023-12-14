import { FC } from 'react';
type Props = {
  moneyTitle: string;
  moneyContent: string;
};
export const PriceProduct: FC<Props> = ({ moneyTitle, moneyContent }) => {
  return (
    <div className='flex flex-col justify-between items-start mb-1'>
      <h3 className='text-deepPink lg:text-[17px] text-[20px] mr-[5px]'>
        {moneyTitle}
      </h3>
      <p className='text-gray-400  lg:text-[12px]'>{moneyContent}</p>
    </div>
  );
};
