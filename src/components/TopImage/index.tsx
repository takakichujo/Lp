import { FC } from 'react';
type Props = {
  img: string;
};
export const TopImage: FC<Props> = ({ img }) => {
  return (
    <h1>
      <img src={img} className='w-1021 h-376' />
    </h1>
  );
};
