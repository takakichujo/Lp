import { FC } from 'react';
import { RegionContentInfo } from '../../../types';
import { RegionProduct } from '../RegionProduct';
type Props = {
  array: RegionContentInfo[];
};
export const RegionProducts: FC<Props> = ({ array }) => {
  return (
    <div className='grid lg:grid-cols-4 grid-cols-2 place-items-center lg:w-full w-90% mx-auto gap-4'>
      {array.map((item) => (
        <RegionProduct
          key={item.img}
          content={item.content}
          img={item.img}
          title={item.title}
          moneyTitle={item.moneyTitle}
          moneyContent={item.moneyContent}
          isCart={item.isCart}
        />
      ))}
    </div>
  );
};
