import { FC } from 'react';
type Props = {
  img: string;
  title: string;
};
export const RegionTopImg: FC<Props> = ({ img, title }) => {
  return (
    <div className='relative'>
      <img className=' h-146 mx-auto w-full' src={img} />
      <h2 className='text-23 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
        {title}
      </h2>
    </div>
  );
};
