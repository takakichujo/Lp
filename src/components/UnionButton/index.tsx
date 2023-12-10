import { MoneyContent } from '../MoneyContent';
import { MoneyMessage } from '../MoneyMessage';
import { Button } from '../Button';
import { FC } from 'react';
import { AddBuy } from '../AddBuy';
type Props = {
  className?: string;
  message: string;
  content: string;
};
export const UnionButton: FC<Props> = ({ className, message, content }) => {
  return (
    <div
      className={`flex lg:flex-row flex-col justify-center lg:items-end items-center ${className}`}
    >
      <AddBuy content={content} />
      <MoneyContent message={message} className='mb-10 lg:mb-0 lg:ml-0 ml-6' />
      <div className='ml-20 relative'>
        <MoneyMessage
          className='absolute -top-10 lg:block hidden'
          message='原價 11,088日圓(含稅)，現省1,008日圓'
        />
        <Button />
      </div>
    </div>
  );
};
