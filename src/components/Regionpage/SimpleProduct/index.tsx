import { FC } from 'react';

export type Props = {
  img: string;
};
export const SimpleProduct: FC<Props> = ({ img }) => {
  return (
    <div className='w-[80px] h-[60px] bg-white mr-[4px] ml-[4px]'>
      <img className=' w-[80px] h-[60px] object-contain' src={img} />
    </div>
  );
};
