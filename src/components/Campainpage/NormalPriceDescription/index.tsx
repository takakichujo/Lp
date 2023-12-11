import { FC } from 'react';
type Props = {
  message: string;
};
export const NormalPriceDescription: FC<Props> = ({ message }) => {
  return <p className='absolute -top-10 lg:block hidden w-300'>{message}</p>;
};
