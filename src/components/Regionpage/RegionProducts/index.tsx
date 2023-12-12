import { FC } from 'react';
import { RegionContentInfo } from '../../../types';
import { RegionProduct } from '../RegionProduct';
type Props = {
  array: RegionContentInfo[];
};
export const RegionProducts: FC<Props> = ({ array }) => {
  return (
    <div className='grid grid-cols-4 place-items-center w-80% mx-auto gap-4'>
      {array.map((item) => (
        <RegionProduct
          content={item.content}
          img={item.img}
          title={item.title}
          moneyTitle={item.moneyTitle}
          moneyContent={item.moneyContent}
        />
      ))}
    </div>
  );
};
