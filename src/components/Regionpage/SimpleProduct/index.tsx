import { FC } from 'react';

export type Props = {
  img: string;
};
export const SimpleProduct: FC<Props> = ({ img }) => {
  return <img className='w-60 h-60 object-contain' src={img} />;
};
