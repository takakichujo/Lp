import { SpecialPriceDescription } from '../SpecialPriceDescription';
import { NormalPriceDescription } from '../NormalPriceDescription';
import { Button } from '../../Commons/Button';
import { FC } from 'react';
import { SpPriceDescription } from '../SpPriceDescription';
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
      <SpPriceDescription content={content} />
      <SpecialPriceDescription
        message={message}
        className='mb-10 lg:mb-0 lg:ml-0 ml-6'
      />
      <div className='ml-20 relative'>
        <NormalPriceDescription
          className='absolute -top-10 lg:block hidden w-300'
          message={content}
        />
        <Button>立即加入購物車 </Button>
      </div>
    </div>
  );
};
