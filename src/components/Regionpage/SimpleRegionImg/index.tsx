import { FC } from 'react';
type Props = {
  img: string;
};
export const SimpleRegionImg: FC<Props> = ({ img }) => {
  return <img className='w-full h-full object-cover' src={img} />;
};
