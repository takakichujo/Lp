import { SpecialPriceDescription } from '../SpecialPriceDescription';
import { NormalPriceDescription } from '../NormalPriceDescription';
import { Button } from '../../Commons/Button';
import { FC } from 'react';
import { SpPriceDescription } from '../SpPriceDescription';
type Props = {
  message: string;
  content: string;
};
export const UnionButton: FC<Props> = ({ message, content }) => {
  return (
    <div
      className={`flex lg:flex-row flex-col justify-center lg:items-end items-center text-center`}
    >
      <SpPriceDescription content={content} />
      <SpecialPriceDescription message={message} />
      <div className='ml-20 relative'>
        <NormalPriceDescription message={content} />
        <Button>立即加入購物車 </Button>
      </div>
    </div>
  );
};
