import { MoneyContent } from '../MoneyContent';
import { MoneyMessage } from '../MoneyMessage';
import { Button } from '../Button';
import { FC } from 'react';

export const UnionButton: FC = () => {
  return (
    <div className='flex justify-center items-end'>
      <MoneyContent message='10,800' />
      <div className='ml-20 relative'>
        <MoneyMessage
          className='absolute -top-10'
          message='原價 11,088日圓(含稅)，現省1,008日圓'
        />
        <Button />
      </div>
    </div>
  );
};
